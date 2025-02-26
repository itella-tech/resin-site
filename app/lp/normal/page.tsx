import { Metadata } from "next"

export const metadata: Metadata = {
  title: "石垣島の思い出づくり体験 - レジンアートで作る特別な思い出 | れじこら工房",
  description: "石垣島で海の思い出を形に - 美しい海をイメージしたレジンアート体験",
  openGraph: {
    title: "石垣島の思い出づくり体験 - レジンアートで作る特別な思い出 | れじこら工房",
    description: "石垣島で海の思い出を形に - 美しい海をイメージしたレジンアート体験",
  },
}

import { Hero } from "@/components/lp/Hero"
import { normalContent } from "@/components/lp/content"
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
      <main className="flex-grow">
        <Hero content={normalContent.hero} />
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
