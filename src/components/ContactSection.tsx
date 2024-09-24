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
        <div className="max-w-4xl w-full mx-auto mb-36">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-44 mb-8">Get in touch</h1>
          <p className="text-lg font-medium text-muted-foreground max-w-lg mx-auto mb-8">
            Interested in working with us? Reach out via Twitter.
          </p>
          <Button asChild variant="default" size="lg" className="transition-transform duration-300 hover:scale-105 mb-16">
            <Link
              href="https://twitter.com/messages/compose?recipient_id=848656782289391616"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full h-px bg-border absolute bottom-0"></div>
    </section>
  )
}