import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FlurSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden bg-white flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-100"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[600px_1fr] lg:gap-12 xl:grid-cols-[700px_1fr] items-center">
          <div className="flex items-center justify-center">
            <Link href="https://flur.gg/docs/mint" target="_blank" rel="noopener noreferrer" className="block w-full">
              <div className="relative w-full aspect-[16/9] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
                <Image
                  src="/api.png"
                  alt="Open Fractal Dashboard"
                  width={1920}
                  height={1080}
                  className="rounded-lg shadow-lg object-contain"
                />
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Building the Infrastructure for Fractal Bitcoin.
            </h1>
            <p className="max-w-[600px] text-muted-foreground font-medium md:text-lg">
            Our CAT-20 Mint API is fully open source and free to use, so developers can build faster and better than ever before.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button 
                size="lg" 
                variant="default" 
                asChild
                className="transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
              >
                <a href="https://flur.gg/docs/mint" target="_blank" rel="noopener noreferrer">
                  Check it Out
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
    </section>
  )
}