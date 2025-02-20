"use client"

import { useState } from "react"
import { Booking } from "."
import { DailyTimeSlot, MenuItem, ReservationStep } from "@/types/reservation"

export function BookingContainer() {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<DailyTimeSlot | null>(null)
  const [currentStep, setCurrentStep] = useState<ReservationStep>("select")

  const handleBookingStateChange = (isFormVisible: boolean) => {
    // 予約フォームが表示されている時のみトップにスクロール
    if (currentStep !== "select" && isFormVisible) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <Booking 
      onStateChange={handleBookingStateChange}
      selectedMenu={selectedMenu}
      selectedSlot={selectedSlot}
      currentStep={currentStep}
      onMenuSelect={setSelectedMenu}
      onSlotSelect={setSelectedSlot}
      onStepChange={setCurrentStep}
    />
  )
}
