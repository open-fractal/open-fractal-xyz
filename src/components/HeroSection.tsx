import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="relative bg-background text-center pb-0 mt-0 overflow-hidden w-full">
      <div 
        className="absolute inset-0 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,transparent_10%,#000_100%)]"
        aria-hidden="true"
      />
      <div className="relative px-4 z-10">
        <div className="max-w-4xl w-full mx-auto mb-12 space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-44">OpenFractal</h1>
          <p className="text-lg font-medium text-muted-foreground max-w-lg mx-auto">
            Building open source applications that power the Fractal Bitcoin ecosystem.
          </p>
          <Button asChild variant="default" size="lg" className="transition-transform duration-300 hover:scale-105">
            <Link
              href="https://github.com/open-fractal"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Github
            </Link>
          </Button>
        </div>
        <div className="max-w-[70%] mx-auto overflow-hidden rounded-t-[24px] relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            borderTop: '1px solid #e5e7eb',
            borderLeft: '1px solid #e5e7eb',
            borderRight: '1px solid #e5e7eb',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          }}></div>
          <Image
            src="/hero-rev.svg"
            alt="Abstract fractal pattern"
            width={1920}
            height={480}
            className="w-full h-auto max-h-[480px] object-cover"
          />
        </div>
      </div>
      <div className="w-full h-px bg-border absolute bottom-0"></div>
    </section>
  )
}