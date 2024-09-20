import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FlurSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden bg-white flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-gray-100"
      ></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Introducing Flur
            </h1>
            <p className="max-w-[600px] text-muted-foreground font-medium md:text-lg">
            A fully open source CAT-20 Minter with over 1,000,000 mint requests processed in the first day. Not bad for an example project, right?
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button 
                size="lg" 
                variant="default" 
                asChild
                className="transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
              >
                <a href="https://flur.gg" target="_blank" rel="noopener noreferrer">
                  Check it Out
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-100"
              >
                <a href="https://flur.gg/docs" target="_blank" rel="noopener noreferrer">
                  Build Your Own
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="https://flur.gg" target="_blank" rel="noopener noreferrer" className="block w-full">
              <div className="relative w-full aspect-[16/9] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
                <Image
                  src="/flur.png"
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
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
    </section>
  )
}