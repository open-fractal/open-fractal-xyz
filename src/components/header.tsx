'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 w-full h-14 flex items-center text-gray-800 transition-all duration-300 z-50 ${isScrolled ? 'bg-white/80 backdrop-blur-[8px] border-b border-gray-200' : 'bg-transparent'}`}>
        
      <div className="w-full px-12 flex justify-between items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl">Open Fractal</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            className="text-sm font-medium hover:text-gray-600 transition-colors"
            href="https://github.com"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            className="text-sm font-medium hover:text-gray-600 transition-colors"
            href="https://twitter.com"
          >
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}