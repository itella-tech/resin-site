import { Header } from "@/components/lp/Header";
import { Hero } from "@/components/lp/Hero";
import { Lead } from "@/components/lp/Lead";
import { ExperienceHighlights } from "@/components/lp/ExperienceHighlights";
import { TourSchedule } from "@/components/TourSchedule";
import { FAQ } from "@/components/lp/FAQ";
import { Booking } from "@/components/lp/Booking";
import { Reviews } from "@/components/Reviews";
import { StoreInfo } from "@/components/lp/StoreInfo";
import { Footer } from "@/components/Footer";

export default function ResinArtExperience() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Lead />
        <ExperienceHighlights />
        <TourSchedule />
        <FAQ />
        <Reviews />
        <StoreInfo />
      </main>
      <Footer />
    </div>
  );
}
