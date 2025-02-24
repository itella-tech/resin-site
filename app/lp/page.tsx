import { Metadata } from "next"

export const metadata: Metadata = {
  title: "雨の日の室内ものづくり体験 - 石垣島のレジンアート体験 | れじこら工房",
  description: "雨の日は室内で思い出作り - 石垣島で楽しむレジンアート体験",
  openGraph: {
    title: "雨の日の室内ものづくり体験 - 石垣島のレジンアート体験 | れじこら工房",
    description: "雨の日は室内で思い出作り - 石垣島で楽しむレジンアート体験",
  },
}

import { Header } from "@/components/lp/Header"
import { Hero } from "@/components/lp/Hero"
import { Lead } from "@/components/lp/Lead"
import { rainyContent } from "@/components/lp/content"
import { ExperienceHighlights } from "@/components/lp/ExperienceHighlights"
import { ExperiencePlans } from "@/components/lp/ExperiencePlans"
import { TourSchedule } from "@/components/TourSchedule"
import { BookingContainer } from "@/components/lp/Booking/BookingContainer"
import { FAQ } from "@/components/lp/FAQ"
import { Reviews } from "@/components/Reviews"
import { StoreInfo } from "@/components/lp/StoreInfo"
import { Footer } from "@/components/Footer"
import { ScrollCTA } from "@/components/lp/ScrollCTA"

export default function ResinArtExperience() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero content={rainyContent.hero} />
        <Lead content={rainyContent.lead} />
        <ExperienceHighlights />
        <ExperiencePlans />
        <TourSchedule />
        <BookingContainer />
        <FAQ />
        <Reviews />
        <StoreInfo />
        <ScrollCTA />
      </main>
      <Footer />
    </div>
  )
}
