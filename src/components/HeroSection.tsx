import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '1.5M+', label: 'Mints Processed' },
  { value: '45k+', label: 'Unique Visitors' },
  { value: '350k+', label: 'Page Views' },
  { value: '99.9%', label: 'Uptime' },
];

export default function Component() {
  return (
    <section className="relative bg-background text-center pb-0 mt-0 overflow-hidden w-full">
      <div 
        className="absolute inset-0 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,transparent_10%,#000_100%)]"
        aria-hidden="true"
      />
      <div className="relative px-4 z-10">
        <div className="max-w-4xl w-full mx-auto mb-36">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-44 mb-8">OpenFractal</h1>
          <p className="text-lg font-medium text-muted-foreground max-w-lg mx-auto mb-8">
            Building open source applications that power the Fractal Bitcoin ecosystem.
          </p>
          <Button asChild variant="default" size="lg" className="transition-transform duration-300 hover:scale-105 mb-16">
            <Link
              href="https://github.com/open-fractal"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Github
            </Link>
          </Button>
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center px-6 py-4 bg-gray-50 rounded-lg border shadow-sm w-full">
                  <h3 className="text-3xl font-bold tracking-tighter sm:text-3xl">{stat.value}</h3>
                  <p className="text-sm font-medium text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-border absolute bottom-0"></div>
    </section>
  )
}