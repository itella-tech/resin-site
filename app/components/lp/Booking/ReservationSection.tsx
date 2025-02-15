"use client"

import { useState, useEffect, useCallback, Dispatch, SetStateAction } from "react"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReservationForm } from "@/components/reservation-form"
import { DailyTimeSlot, MenuItem, ReservationStep, ReservationFormData } from "@/types/reservation"
import { createClientSupabaseClient } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ReservationSectionProps {
  onStateChange: (isFormVisible: boolean) => void
  selectedMenu: MenuItem | null
  selectedSlot: DailyTimeSlot | null
  currentStep: ReservationStep
  onMenuSelect: Dispatch<SetStateAction<MenuItem | null>>
  onSlotSelect: Dispatch<SetStateAction<DailyTimeSlot | null>>
  onStepChange: Dispatch<SetStateAction<ReservationStep>>
}

export function ReservationSection({ 
  onStateChange,
  selectedMenu,
  selectedSlot,
  currentStep,
  onMenuSelect,
  onSlotSelect,
  onStepChange,
}: ReservationSectionProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [dailySlots, setDailySlots] = useState<DailyTimeSlot[]>([])
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [reservationData, setReservationData] = useState<ReservationFormData | null>(null)
  const { toast } = useToast()
  const supabase = createClientSupabaseClient()

  // メニュー一覧を取得
  useEffect(() => {
    const fetchMenuItems = async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .order("price")
        .returns<MenuItem[]>()

      if (error) {
        toast({
          title: "エラーが発生しました",
          description: "メニューの取得に失敗しました",
          variant: "destructive",
        })
        return
      }

      setMenuItems(data || [])
    }

    fetchMenuItems()
  }, [toast, supabase])

  // 選択された日付の予約枠を取得
  const fetchDailySlots = useCallback(async (date: Date) => {
    try {
      setIsLoading(true)
      
      // 時間枠を取得
      const { data: timeSlots, error: timeSlotsError } = await supabase
        .from("time_slots")
        .select("*")
        .order("start_time")
        .returns<{ slot_id: string; capacity: number; start_time: string; end_time: string }[]>()

      if (timeSlotsError) throw new Error("予約枠の取得に失敗しました")

      // 選択された日付の売止設定を取得
      const { data: soldOutSettings, error: soldOutError } = await supabase
        .from("sold_out_settings")
        .select("slot_id")
        .eq("date", format(date, "yyyy-MM-dd"))
        .returns<{ slot_id: string }[]>()

      if (soldOutError) throw new Error("売止設定の取得に失敗しました")

      // 選択された日付の予約を取得して残り定員を計算
      const { data: reservations, error: reservationsError } = await supabase
        .from("reservations")
        .select("slot_id, number_of_people")
        .eq("reservation_date", format(date, "yyyy-MM-dd"))
        .returns<{ slot_id: string; number_of_people: number }[]>()

      if (reservationsError) throw new Error("予約情報の取得に失敗しました")

      // 予約枠ごとの予約人数を集計
      const reservationCounts = (reservations || []).reduce((acc: Record<string, number>, curr) => {
        acc[curr.slot_id] = (acc[curr.slot_id] || 0) + curr.number_of_people
        return acc
      }, {} as Record<string, number>) || {}

      // 売止設定のslot_idセットを作成
      const soldOutSlotIds = new Set((soldOutSettings || []).map(s => s.slot_id))

      // 日付と時間枠を組み合わせた情報を作成
      const dailyTimeSlots = (timeSlots || []).map(slot => ({
        ...slot,
        date: format(date, "yyyy-MM-dd"),
        is_sold_out: soldOutSlotIds.has(slot.slot_id),
        available_capacity: slot.capacity - (reservationCounts[slot.slot_id] || 0)
      })) || []

      setDailySlots(dailyTimeSlots)
    } catch (error) {
      const message = error instanceof Error ? error.message : "予約枠の取得に失敗しました"
      toast({
        title: "エラーが発生しました",
        description: message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [supabase, toast])

  // 初期データの読み込み
  useEffect(() => {
    if (selectedDate) {
      fetchDailySlots(selectedDate)
    }
  }, [selectedDate, fetchDailySlots])

  // 日付が選択された時の処理
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
  }

  // メニューが選択された時の処理
  const handleMenuSelect = (menu: MenuItem) => {
    onMenuSelect(menu)
  }

  // 時間枠が選択された時の処理
  const handleSlotSelect = (slot: DailyTimeSlot) => {
    if (!selectedMenu) {
      toast({
        title: "メニューを選択してください",
        description: "予約を進めるにはメニューを選択する必要があります",
        variant: "destructive",
      })
      return
    }
    onStateChange(true)
    onSlotSelect(slot)
    onStepChange("form")
  }

  // 予約完了時の処理
  const handleReservationSuccess = (formData: ReservationFormData) => {
    setReservationData(formData)
    onStepChange("complete")
  }

  // 予約確定画面から戻るボタンの処理
  const handleCompleteBack = () => {
    onStateChange(false)
    onSlotSelect(null)
    onMenuSelect(null)
    onStepChange("select")
    setReservationData(null)
    window.location.href = "/lp#booking"
  }

  // 戻るボタンの処理
  const handleBack = () => {
    onStateChange(false)
    onStepChange("select")
    onSlotSelect(null)
    window.location.href = "/lp#booking"
  }

  const renderTimeSlot = (slot: DailyTimeSlot) => (
    <Card
      key={slot.slot_id}
      className={`cursor-pointer ${!slot.is_sold_out && "hover:bg-accent"}`}
    >
      <CardContent
        className="p-4"
        onClick={() => !slot.is_sold_out && handleSlotSelect(slot)}
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">
              {format(new Date(`2000-01-01T${slot.start_time}`), "H:mm", {
                locale: ja,
              })}
              {" - "}
              {format(new Date(`2000-01-01T${slot.end_time}`), "H:mm", {
                locale: ja,
              })}
            </p>
            <p className="text-sm text-muted-foreground">
              残り{slot.available_capacity}名
            </p>
          </div>
          {slot.is_sold_out ? (
            <span className="text-destructive font-medium">
              売止
            </span>
          ) : (
            <span className="text-primary font-medium">
              予約可能
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )

  const renderMenuItem = (menu: MenuItem) => (
    <Card
      key={menu.menu_id}
      className={`cursor-pointer transition-colors ${
        selectedMenu?.menu_id === menu.menu_id
          ? "bg-primary/10"
          : "hover:bg-accent"
      }`}
      onClick={() => handleMenuSelect(menu)}
    >
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          {menu.image_url && (
            <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={menu.image_url}
                alt={menu.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex-grow">
            <h3 className="font-medium">{menu.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {menu.description}
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-muted-foreground">
                {menu.duration}分
              </span>
              <span className="font-bold">
                ¥{menu.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  if (currentStep === "complete" && selectedSlot && selectedMenu && reservationData) {
    return (
      <div className="container max-w-2xl py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">予約確定</h1>
          <Button variant="outline" onClick={handleCompleteBack}>
            トップに戻る
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>予約が確定しました</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                {selectedMenu.image_url && (
                  <div className="w-24 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={selectedMenu.image_url}
                      alt={selectedMenu.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-bold mb-2">{selectedMenu.name}</h2>
                  <p className="text-muted-foreground mb-2">{selectedMenu.description}</p>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">
                      <span className="font-medium">所要時間:</span> {selectedMenu.duration}分
                    </p>
                    <p className="text-lg font-bold">
                      ¥{selectedMenu.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">予約日時</h3>
                <p className="text-lg">
                  {format(new Date(selectedSlot.date), "M月d日", { locale: ja })}
                  {" "}
                  {format(new Date(`2000-01-01T${selectedSlot.start_time}`), "H:mm", {
                    locale: ja,
                  })}
                  {" - "}
                  {format(new Date(`2000-01-01T${selectedSlot.end_time}`), "H:mm", {
                    locale: ja,
                  })}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  予約人数: {reservationData.number_of_people}名
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">お客様情報</h3>
                <p className="text-lg">{reservationData.name} 様</p>
                <p className="text-sm text-muted-foreground mt-1">
                  電話番号: {reservationData.phone_number}
                </p>
                <p className="text-sm text-muted-foreground">
                  メールアドレス: {reservationData.email}
                </p>
                {reservationData.notes && (
                  <div className="mt-2">
                    <p className="text-sm font-medium">備考</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {reservationData.notes}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-center text-sm text-muted-foreground">
                  ご予約ありがとうございます。当日のご来店を心よりお待ちしております。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  } else if (currentStep === "form" && selectedSlot && selectedMenu) {
    return (
      <div className="container max-w-2xl py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">予約フォーム</h1>
          <Button variant="outline" onClick={handleBack}>
            選択画面に戻る
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>予約内容</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                {selectedMenu.image_url && (
                  <div className="w-24 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={selectedMenu.image_url}
                      alt={selectedMenu.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-bold mb-2">{selectedMenu.name}</h2>
                  <p className="text-muted-foreground mb-2">{selectedMenu.description}</p>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">
                      <span className="font-medium">所要時間:</span> {selectedMenu.duration}分
                    </p>
                    <p className="text-lg font-bold">
                      ¥{selectedMenu.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">予約日時</h3>
                <p className="text-lg">
                  {format(new Date(selectedSlot.date), "M月d日", { locale: ja })}
                  {" "}
                  {format(new Date(`2000-01-01T${selectedSlot.start_time}`), "H:mm", {
                    locale: ja,
                  })}
                  {" - "}
                  {format(new Date(`2000-01-01T${selectedSlot.end_time}`), "H:mm", {
                    locale: ja,
                  })}
                </p>
                <p className="text-sm text-muted-foreground">
                  残り{selectedSlot.available_capacity}名まで予約可能
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
              slot={selectedSlot}
              menu={selectedMenu}
              onSuccess={handleReservationSuccess}
              onCancel={handleBack}
            />
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">予約する</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* メニュー選択 */}
        <Card>
          <CardHeader>
            <CardTitle>メニューを選択</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {menuItems.map(renderMenuItem)}
            </div>
          </CardContent>
        </Card>

        {/* 日時選択 */}
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedDate
                ? format(selectedDate, "M月d日", { locale: ja }) + "の予約枠"
                : "日付を選択"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              locale={ja}
              disabled={(date) => date < new Date()}
            />
            <div className="border-t pt-6">
              <div className="space-y-2">
                {isLoading ? (
                  <p className="text-muted-foreground">読み込み中...</p>
                ) : dailySlots.length === 0 ? (
                  <p className="text-muted-foreground">
                    予約可能な枠がありません
                  </p>
                ) : (
                  dailySlots.map(renderTimeSlot)
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
