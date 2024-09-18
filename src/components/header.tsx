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
    <header className={`fixed top-0 left-0 right-0 w-full px-4 lg:px-6 h-14 flex items-center text-gray-800 transition-all duration-300 z-50 bg-white border-b border-gray-200`}>
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl ml-2">Open Fractal</span>
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