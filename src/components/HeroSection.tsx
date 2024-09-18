import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Component() {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white text-gray-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-14 mt-12 mb-12">
        <h1 className="text-5xl md:text-5xl font-extrabold mb-4 text-center mt-12 text-black">Open Fractal</h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-center mb-6">
          Improving scale and accessibility of smart contracts and indexers on Fractal Bitcoin.
        </p>
        <div className="flex justify-center mb-12">
          <Link href="https://flur.gg" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="lg">
              View an Example
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto relative z-10 overflow-hidden rounded-t-[24px]">
        <Image
          src="/hero.png"
          alt="Open Fractal Illustration"
          width={1400}
          height={467}
          className="w-full"
        />
      </div>
      <div className="w-full h-px bg-gray-200"></div>
    </section>
  )
}