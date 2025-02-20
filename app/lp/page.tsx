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
      </main>
      <Footer />
    </div>
  )
}
