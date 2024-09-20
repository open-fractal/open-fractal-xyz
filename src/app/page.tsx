import Header from "@/components/header"
import HeroSection from "@/components/HeroSection"
import FlurSection from "@/components/FlurSection"
import CardsSection from "@/components/CardsSection"
import ApiSection from "@/components/ApiSection"
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <FlurSection />
        <ApiSection />
        <CardsSection />
      </main>
    </>
  )
}
