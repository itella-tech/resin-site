"use client"

import { useState, useEffect } from "react"
import { format, addDays } from "date-fns"
import { ja } from "date-fns/locale"
import { createClientSupabaseClient } from "@/lib/supabase"

type AvailabilityStatus = {
  isAvailable: boolean;
  message: string;
}

export function AvailabilityBadge() {
  const [status, setStatus] = useState<AvailabilityStatus | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAvailability = async () => {
      try {
        setIsLoading(true)
        const supabase = createClientSupabaseClient()
        const now = new Date()
        const currentHour = now.getHours()
        const currentMinutes = now.getMinutes()
        const isBusinessHours = currentHour >= 10 && currentHour < 18
        
        console.log("AvailabilityBadge: 空き状況チェック開始", { 
          currentTime: `${currentHour}:${currentMinutes}`,
          isBusinessHours 
        })
        
        // 時間枠を取得
        const { data: timeSlots, error: timeSlotsError } = await supabase
          .from("time_slots")
          .select("*")
          .order("start_time")
          .returns<{ slot_id: string; capacity: number; start_time: string; end_time: string }[]>()

        console.log("AvailabilityBadge: 時間枠取得結果", { timeSlots, timeSlotsError })
        if (timeSlotsError) throw new Error("予約枠の取得に失敗しました")

        // 営業時間内の場合は本日の空き状況をチェック
        if (isBusinessHours) {
          const today = now
          const formattedDate = format(today, "yyyy-MM-dd")
          
          // 本日の売止設定を取得
          const { data: soldOutSettings, error: soldOutError } = await supabase
            .from("sold_out_settings")
            .select("slot_id")
            .eq("date", formattedDate)
            .returns<{ slot_id: string }[]>()

          console.log("AvailabilityBadge: 売止設定取得結果", { soldOutSettings, soldOutError })
          if (soldOutError) throw new Error("売止設定の取得に失敗しました")

          // 本日の予約を取得して残り定員を計算
          const { data: reservations, error: reservationsError } = await supabase
            .from("reservations")
            .select("slot_id, number_of_people")
            .eq("reservation_date", formattedDate)
            .returns<{ slot_id: string; number_of_people: number }[]>()

          console.log("AvailabilityBadge: 予約情報取得結果", { reservations, reservationsError })
          if (reservationsError) throw new Error("予約情報の取得に失敗しました")

          // 予約枠ごとの予約人数を集計
          const reservationCounts = (reservations || []).reduce((acc: Record<string, number>, curr) => {
            acc[curr.slot_id] = (acc[curr.slot_id] || 0) + curr.number_of_people
            return acc
          }, {} as Record<string, number>) || {}

          // 売止設定のslot_idセットを作成
          const soldOutSlotIds = new Set((soldOutSettings || []).map(s => s.slot_id))

          // 日付と時間枠を組み合わせた情報を作成
          const dailyTimeSlots = (timeSlots || []).map(slot => {
            const startHour = parseInt(slot.start_time.split(':')[0], 10)
            const startMinutes = parseInt(slot.start_time.split(':')[1], 10)
            return {
              ...slot,
              date: formattedDate,
              is_sold_out: soldOutSlotIds.has(slot.slot_id),
              available_capacity: slot.capacity - (reservationCounts[slot.slot_id] || 0),
              start_hour: startHour,
              start_minutes: startMinutes
            }
          }) || []

          // 現在時刻以降の予約枠で空きがあるかチェック
          const availableSlots = dailyTimeSlots.filter(slot => 
            !slot.is_sold_out && 
            slot.available_capacity > 0 && 
            (slot.start_hour > currentHour || (slot.start_hour === currentHour && slot.start_minutes > currentMinutes))
          )

          console.log("AvailabilityBadge: 本日の空き状況チェック結果", { availableSlots })
          
          if (availableSlots.length > 0) {
            setStatus({
              isAvailable: true,
              message: `今空いてます！`
            })
          } else {
            // 本日の空きがない場合は明日の空き状況をチェック
            await checkTomorrowAvailability(supabase, timeSlots)
          }
        } else {
          // 営業時間外の場合
          if (currentHour >= 18 && currentHour < 24) {
            // 18時〜24時の場合は明日の空き状況をチェック
            await checkTomorrowAvailability(supabase, timeSlots)
          } else {
            // 0時〜10時の場合は本日の空き状況をチェック
            const today = now
            const formattedDate = format(today, "yyyy-MM-dd")
            
            // 本日の売止設定を取得
            const { data: soldOutSettings, error: soldOutError } = await supabase
              .from("sold_out_settings")
              .select("slot_id")
              .eq("date", formattedDate)
              .returns<{ slot_id: string }[]>()

            if (soldOutError) throw new Error("売止設定の取得に失敗しました")

            // 本日の予約を取得して残り定員を計算
            const { data: reservations, error: reservationsError } = await supabase
              .from("reservations")
              .select("slot_id, number_of_people")
              .eq("reservation_date", formattedDate)
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
            const dailyTimeSlots = (timeSlots || []).map(slot => {
              const startHour = parseInt(slot.start_time.split(':')[0], 10)
              const startMinutes = parseInt(slot.start_time.split(':')[1], 10)
              return {
                ...slot,
                date: formattedDate,
                is_sold_out: soldOutSlotIds.has(slot.slot_id),
                available_capacity: slot.capacity - (reservationCounts[slot.slot_id] || 0),
                start_hour: startHour,
                start_minutes: startMinutes
              }
            }) || []

            // 本日の予約枠で空きがあるかチェック
            const availableSlots = dailyTimeSlots.filter(slot => 
              !slot.is_sold_out && 
              slot.available_capacity > 0
            )

            console.log("AvailabilityBadge: 本日の空き状況チェック結果（営業時間外）", { availableSlots })
            
            if (availableSlots.length > 0) {
              // 最も早い時間枠を取得
              const earliestSlot = availableSlots.sort((a, b) => {
                if (a.start_hour !== b.start_hour) return a.start_hour - b.start_hour
                return a.start_minutes - b.start_minutes
              })[0]
              
              const slotTime = `${earliestSlot.start_hour}:${earliestSlot.start_minutes.toString().padStart(2, '0')}`
              setStatus({
                isAvailable: true,
                message: `本日${slotTime}から空いてます！`
              })
            } else {
              // 本日の空きがない場合は明日の空き状況をチェック
              await checkTomorrowAvailability(supabase, timeSlots)
            }
          }
        }
      } catch (error) {
        console.error("空き状況の確認に失敗しました", error)
        setStatus(null)
      } finally {
        setIsLoading(false)
      }
    }

    // 時間枠の型定義
    type TimeSlot = {
      slot_id: string;
      capacity: number;
      start_time: string;
      end_time: string;
    }

    // Supabaseクライアントの型定義
    type SupabaseClient = ReturnType<typeof createClientSupabaseClient>

    const checkTomorrowAvailability = async (supabase: SupabaseClient, timeSlots: TimeSlot[]) => {
      const tomorrow = addDays(new Date(), 1)
      const formattedTomorrow = format(tomorrow, "yyyy-MM-dd")
      
      // 明日の売止設定を取得
      const { data: tomorrowSoldOutSettings, error: tomorrowSoldOutError } = await supabase
        .from("sold_out_settings")
        .select("slot_id")
        .eq("date", formattedTomorrow)
        .returns<{ slot_id: string }[]>()

      console.log("AvailabilityBadge: 明日の売止設定取得結果", { tomorrowSoldOutSettings, tomorrowSoldOutError })
      if (tomorrowSoldOutError) throw new Error("明日の売止設定の取得に失敗しました")

      // 明日の予約を取得して残り定員を計算
      const { data: tomorrowReservations, error: tomorrowReservationsError } = await supabase
        .from("reservations")
        .select("slot_id, number_of_people")
        .eq("reservation_date", formattedTomorrow)
        .returns<{ slot_id: string; number_of_people: number }[]>()

      console.log("AvailabilityBadge: 明日の予約情報取得結果", { tomorrowReservations, tomorrowReservationsError })
      if (tomorrowReservationsError) throw new Error("明日の予約情報の取得に失敗しました")

      // 予約枠ごとの予約人数を集計
      const tomorrowReservationCounts = (tomorrowReservations || []).reduce((acc: Record<string, number>, curr) => {
        acc[curr.slot_id] = (acc[curr.slot_id] || 0) + curr.number_of_people
        return acc
      }, {} as Record<string, number>) || {}

      // 売止設定のslot_idセットを作成
      const tomorrowSoldOutSlotIds = new Set((tomorrowSoldOutSettings || []).map(s => s.slot_id))

      // 日付と時間枠を組み合わせた情報を作成
      const tomorrowTimeSlots = (timeSlots || []).map(slot => {
        const startHour = parseInt(slot.start_time.split(':')[0], 10)
        const startMinutes = parseInt(slot.start_time.split(':')[1], 10)
        return {
          ...slot,
          date: formattedTomorrow,
          is_sold_out: tomorrowSoldOutSlotIds.has(slot.slot_id),
          available_capacity: slot.capacity - (tomorrowReservationCounts[slot.slot_id] || 0),
          start_hour: startHour,
          start_minutes: startMinutes
        }
      }) || []

      // 明日の予約枠で空きがあるかチェック
      const tomorrowAvailableSlots = tomorrowTimeSlots.filter(slot => 
        !slot.is_sold_out && 
        slot.available_capacity > 0
      )

      console.log("AvailabilityBadge: 明日の空き状況チェック結果", { tomorrowAvailableSlots })
      
      if (tomorrowAvailableSlots.length > 0) {
        // 最も早い時間枠を取得
        const earliestSlot = tomorrowAvailableSlots.sort((a, b) => {
          if (a.start_hour !== b.start_hour) return a.start_hour - b.start_hour
          return a.start_minutes - b.start_minutes
        })[0]
        
        const slotTime = `${earliestSlot.start_hour}:${earliestSlot.start_minutes.toString().padStart(2, '0')}`
        const tomorrowDate = format(tomorrow, "M月d日(E)", { locale: ja })
        
        setStatus({
          isAvailable: true,
          message: `明日（${tomorrowDate}）${slotTime}から空いてます！`
        })
      } else {
        // 明日も空きがない場合
        setStatus(null)
      }
    }

    checkAvailability()
  }, [])

  if (isLoading) {
    return null // ローディング中は何も表示しない
  }

  if (!status) {
    return null // 空きがない場合は何も表示しない
  }

  return (
    <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
      {status.message}
    </div>
  )
}
