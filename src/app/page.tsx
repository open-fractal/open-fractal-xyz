import Header from "@/components/header"
import HeroSection from "@/components/HeroSection"
import FlurSection from "@/components/FlurSection"
import CardsSection from "@/components/CardsSection"
import ApiSection from "@/components/ApiSection"
import FrttrSection from "@/components/FrttrSection"

export default function Home() {
  const frttrItems = [
    { title: "Feature 1", description: "Description of feature 1" },
    { title: "Feature 2", description: "Description of feature 2" },
    { title: "Feature 3", description: "Description of feature 3" },
  ];

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <FlurSection />
        <ApiSection />
        <FrttrSection
          title="Introducing Frttr"
          items={frttrItems}
        />
        <CardsSection />
      </main>
    </>
  )
}
