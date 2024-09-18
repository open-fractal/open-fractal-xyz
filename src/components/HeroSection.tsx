import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="relative bg-background text-center pb-0 mt-0 overflow-hidden">
      <div 
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,transparent_10%,#000_100%)]"
        aria-hidden="true"
      />
      <div className="relative px-4 z-10">
        <div className="max-w-4xl w-full mx-auto mb-12 space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-44">Open Fractal</h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Building open source applications that power the Fractal Bitcoin ecosystem.
          </p>
          <Button asChild variant="default" size="lg">
            <Link
              href="https://github.com/open-fractal"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Github
            </Link>
          </Button>
        </div>
        <div className="w-2/3 mx-auto overflow-hidden rounded-t-[24px]">
          <Image
            src="/hero.png"
            alt="Abstract fractal pattern"
            width={1200}
            height={300}
            className="w-full h-auto max-h-[290px] object-cover"
          />
        </div>
      </div>
      <div className="w-full h-px bg-border absolute bottom-0"></div>
    </section>
  )
}