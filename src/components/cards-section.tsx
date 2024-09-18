import { CheckCircle2, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RoadmapSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto ">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Roadmap</h2>
        <div className="relative grid gap-8 md:grid-cols-3 justify-center">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden md:block">
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-black animate-pulse"></div>
          </div>
          <RoadmapCard
            icon={<CheckCircle2 className="w-6 h-6 text-black" />}
            title="CAT-20 Minter"
            status="Flur is the first CAT-20 Minter on Fractal Bitcoin. It's fully open source and available on GitHub."
            showButton={true}
          />
          <RoadmapCard
            icon={<Circle className="w-6 h-6 text-gray-400 animate-spin" />}
            title="Bulk Minter"
            status="There is no way to mint CAT-20 tokens in bulk yet. This is a feature we are working on adding to Fractal Bitcoin."
          />
          <RoadmapCard
            icon={<Circle className="w-6 h-6 text-gray-400" />}
            title="Marketplace"
            status="A fully functional NFT and token marketplace is one of the core features of Fractal Bitcoin. We are working on building this out."
          />
        </div>
      </div>
    </section>
  )
}

function RoadmapCard({ icon, title, status, showButton = false }) {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md z-10">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-sm text-gray-500 text-center mb-4">{status}</p>
      {showButton && (
        <Button variant="default" className="bg-black text-white hover:bg-gray-800" asChild>
          <a href="https://flur.gg" target="_blank" rel="noopener noreferrer">
            Check it out
          </a>
        </Button>
      )}
    </div>
  )
}