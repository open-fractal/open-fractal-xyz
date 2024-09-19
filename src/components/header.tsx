'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter } from 'lucide-react';

export default function Header() {
  console.log("Header rendering"); // Add this line to force a change

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image
            src="/logo.svg"
            alt="Open Fractal Logo"
            width={150}
            height={40}
            priority
          />
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
  );
}