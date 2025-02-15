"use client"

import { ReservationSection } from "./ReservationSection"
import { DailyTimeSlot, MenuItem, ReservationStep } from "@/types/reservation"
import { Dispatch, SetStateAction } from "react"

interface BookingProps {
  onStateChange: (isFormVisible: boolean) => void
  selectedMenu: MenuItem | null
  selectedSlot: DailyTimeSlot | null
  currentStep: ReservationStep
  onMenuSelect: Dispatch<SetStateAction<MenuItem | null>>
  onSlotSelect: Dispatch<SetStateAction<DailyTimeSlot | null>>
  onStepChange: Dispatch<SetStateAction<ReservationStep>>
}

export function Booking({ 
  onStateChange,
  selectedMenu,
  selectedSlot,
  currentStep,
  onMenuSelect,
  onSlotSelect,
  onStepChange,
}: BookingProps) {
  return (
    <section id="booking" className="py-16 bg-gray-50">
      <div className="container">
        <ReservationSection 
          onStateChange={onStateChange}
          selectedMenu={selectedMenu}
          selectedSlot={selectedSlot}
          currentStep={currentStep}
          onMenuSelect={onMenuSelect}
          onSlotSelect={onSlotSelect}
          onStepChange={onStepChange}
        />
      </div>
    </section>
  )
}
