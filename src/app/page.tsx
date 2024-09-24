import Header from "@/components/header"
import HeroSection from "@/components/HeroSection"
import FlurSection from "@/components/FlurSection"
import ApiSection from "@/components/ApiSection"
import FrttrSection from "@/components/FrttrSection"
import CardsSection from "@/components/CardsSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <FlurSection />
        <ApiSection />
        <CardsSection />
        <FrttrSection />
        <ContactSection />
      </main>
    </>
  )
}
