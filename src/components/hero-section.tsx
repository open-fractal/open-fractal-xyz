import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden bg-white">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0)),
            radial-gradient(circle, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 16px 16px',
          opacity: 0.5,
        }}
      ></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Open Fractal
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Improving scale and accessibility of smart contracts and indexers on Fractal Bitcoin.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button 
                size="lg" 
                variant="default" 
                asChild
                className="transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
              >
                <a href="https://flur.gg" target="_blank" rel="noopener noreferrer">
                  View our CAT-20 Minter
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-100"
              >
                <a href="https://flur.gg/docs" target="_blank" rel="noopener noreferrer">
                  Build your own CAT-20 Minter
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="https://flur.gg" target="_blank" rel="noopener noreferrer" className="block w-full">
              <div className="relative w-full aspect-[16/9] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
                <Image
                  src="/placeholder.svg?height=1080&width=1920"
                  alt="Open Fractal Dashboard"
                  width={1920}
                  height={1080}
                  className="rounded-lg shadow-lg object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}