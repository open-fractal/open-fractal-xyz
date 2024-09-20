import React from 'react';
import { LucideIcon, CheckCircle2, Circle } from 'lucide-react';
import { Button } from './ui/button';

export default function RoadmapSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto ">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">What&apos;s Next?</h2>
        <div className="relative grid gap-8 md:grid-cols-3 justify-center">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden md:block">
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-black animate-pulse"></div>
          </div>
          <RoadmapCard
            icon={CheckCircle2}
            title="CAT-20 Minter"
            status="Flur is the first CAT-20 Minter on Fractal Bitcoin. It's fully open source and available on GitHub."
            showButton={true}
          />
          <RoadmapCard
            icon={Circle}
            title="Bulk Minter"
            status="There is no way to mint CAT-20 tokens in bulk yet. This is a feature we are working on adding to Fractal Bitcoin."
          />
          <RoadmapCard
            icon={Circle}
            title="Marketplace"
            status="A fully functional NFT and token marketplace is one of the core features of Fractal Bitcoin. We are working on building this out."
          />
        </div>
      </div>
    </section>
  )
}

interface RoadmapCardProps {
  icon: LucideIcon;
  title: string;
  status: string;
  showButton?: boolean;
}

function RoadmapCard({ icon: Icon, title, status, showButton = false }: RoadmapCardProps) {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md z-10">
      <div className="mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-md text-gray-500">{status}</p>
      {showButton && (
        <Button variant="outline" size="sm" asChild className="mt-4">
          <a href="https://flur.gg" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </Button>
      )}
    </div>
  )
}