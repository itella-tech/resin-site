"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReservationForm } from "@/components/reservation-form"
import { DailyTimeSlot, MenuItem } from "@/types/reservation"
import { createClientSupabaseClient } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { useRouter } from "next/navigation"

function LoadingState() {
  return (
    <div className="container py-8">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-48 bg-gray-200 rounded"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
        <div className="h-96 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}

function BookingContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()
  const supabase = createClientSupabaseClient()

  const [menu, setMenu] = useState<MenuItem | null>(null)
  const [slot, setSlot] = useState<DailyTimeSlot | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const menuId = searchParams.get("menuId")
        const slotId = searchParams.get("slotId")
        const date = searchParams.get("date")

        if (!menuId || !slotId || !date) {
          throw new Error("必要なパラメータが不足しています")
        }

        // メニュー情報を取得
        const { data: menuData, error: menuError } = await supabase
          .from("menu_items")
          .select("*")
          .eq("menu_id", menuId)
          .single()

        if (menuError) throw new Error("メニューの取得に失敗しました")

        // 時間枠情報を取得
        const { data: slotData, error: slotError } = await supabase
          .from("time_slots")
          .select("*")
          .eq("slot_id", slotId)
          .single()

        if (slotError) throw new Error("予約枠の取得に失敗しました")

        // 予約状況を確認
        const { data: reservations, error: reservationsError } = await supabase
          .from("reservations")
          .select("number_of_people")
          .eq("slot_id", slotId)
          .eq("reservation_date", date)

        if (reservationsError) throw new Error("予約情報の取得に失敗しました")

        // 売止情報を確認
        const { data: soldOut, error: soldOutError } = await supabase
          .from("sold_out_settings")
          .select("*")
          .eq("slot_id", slotId)
          .eq("date", date)
          .single()

        if (soldOutError && soldOutError.code !== "PGRST116") {
          throw new Error("売止情報の取得に失敗しました")
        }

        const typedReservations = (reservations || []) as { number_of_people: number }[]
        const typedSlotData = slotData as { slot_id: string; capacity: number; start_time: string; end_time: string }
        const totalReserved = typedReservations.reduce((sum, r) => sum + r.number_of_people, 0)
        const availableCapacity = typedSlotData.capacity - totalReserved
        const isSoldOut = soldOut !== null

        if (isSoldOut || availableCapacity <= 0) {
          throw new Error("この予約枠は既に予約できません")
        }

        setMenu(menuData as MenuItem)
        if (slotData) {
          setSlot({
            slot_id: typedSlotData.slot_id,
            capacity: typedSlotData.capacity,
            start_time: typedSlotData.start_time,
            end_time: typedSlotData.end_time,
            date,
            available_capacity: availableCapacity,
            is_sold_out: isSoldOut,
          })
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : "予約情報の取得に失敗しました"
        toast({
          title: "エラーが発生しました",
          description: message,
          variant: "destructive",
        })
        router.push("/lp#booking")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [searchParams, toast, router, supabase])

  const handleReservationSuccess = () => {
    router.push("/lp#booking")
  }

  if (isLoading) {
    return <LoadingState />
  }

  if (!menu || !slot) {
    return null
  }

  return (
    <div className="container max-w-2xl py-8">
      <h1 className="text-3xl font-bold mb-8">予約フォーム</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>予約内容</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              {menu.image_url && (
                <div className="w-24 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={menu.image_url}
                    alt={menu.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h2 className="text-xl font-bold mb-2">{menu.name}</h2>
                <p className="text-muted-foreground mb-2">{menu.description}</p>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">
                    <span className="font-medium">所要時間:</span> {menu.duration}分
                  </p>
                  <p className="text-lg font-bold">
                    ¥{menu.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">予約日時</h3>
              <p className="text-lg">
                {format(new Date(slot.date), "M月d日", { locale: ja })}
                {" "}
                {format(new Date(`2000-01-01T${slot.start_time}`), "H:mm", {
                  locale: ja,
                })}
                {" - "}
                {format(new Date(`2000-01-01T${slot.end_time}`), "H:mm", {
                  locale: ja,
                })}
              </p>
              <p className="text-sm text-muted-foreground">
                残り{slot.available_capacity}名まで予約可能
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>お客様情報</CardTitle>
        </CardHeader>
        <CardContent>
          <ReservationForm
            slot={slot}
            menu={menu}
            onSuccess={handleReservationSuccess}
            onCancel={() => router.push("/lp#booking")}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <BookingContent />
    </Suspense>
  )
}
