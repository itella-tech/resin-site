"use client"

import { useState } from "react"
import { Header } from "@/components/lp/Header"
import { Hero } from "@/components/lp/Hero"
import { Lead } from "@/components/lp/Lead"
import { ExperienceHighlights } from "@/components/lp/ExperienceHighlights"
import { ExperiencePlans } from "@/components/lp/ExperiencePlans"
import { TourSchedule } from "@/components/TourSchedule"
import { Booking } from "@/components/lp/Booking"
import { FAQ } from "@/components/lp/FAQ"
import { Reviews } from "@/components/Reviews"
import { StoreInfo } from "@/components/lp/StoreInfo"
import { Footer } from "@/components/Footer"
import { DailyTimeSlot, MenuItem } from "@/types/reservation"

type ReservationStep = "select" | "form"

export default function ResinArtExperience() {
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<DailyTimeSlot | null>(null)
  const [currentStep, setCurrentStep] = useState<ReservationStep>("select")

  const handleBookingStateChange = (isFormVisible: boolean) => {
    setIsBookingFormVisible(isFormVisible)
    if (isFormVisible) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {isBookingFormVisible ? (
          <Booking 
            onStateChange={handleBookingStateChange}
            selectedMenu={selectedMenu}
            selectedSlot={selectedSlot}
            currentStep={currentStep}
            onMenuSelect={setSelectedMenu}
            onSlotSelect={setSelectedSlot}
            onStepChange={setCurrentStep}
          />
        ) : (
          <>
            <Hero />
            <Lead />
            <ExperienceHighlights />
            <ExperiencePlans />
            <TourSchedule />
            <Booking 
              onStateChange={handleBookingStateChange}
              selectedMenu={selectedMenu}
              selectedSlot={selectedSlot}
              currentStep={currentStep}
              onMenuSelect={setSelectedMenu}
              onSlotSelect={setSelectedSlot}
              onStepChange={setCurrentStep}
            />
            <FAQ />
            <Reviews />
            <StoreInfo />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
