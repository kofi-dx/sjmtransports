// components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-teal-700">
            <span className="text-teal-800">St. Joseph</span> Metro Transport
          </Link>
          
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link 
                href="/" 
                className={`${pathname === '/' ? 'text-teal-600 font-semibold' : 'text-gray-700'} hover:text-teal-600 transition-colors`}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`${pathname === '/services' ? 'text-teal-600 font-semibold' : 'text-gray-700'} hover:text-teal-600 transition-colors`}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 bg-white rounded-lg p-4 shadow-lg">
            <Link 
              href="/" 
              className={`block ${pathname === '/' ? 'text-teal-600 font-semibold' : 'text-gray-700'} hover:text-teal-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`block ${pathname === '/services' ? 'text-teal-600 font-semibold' : 'text-gray-700'} hover:text-teal-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="block bg-teal-600 text-white px-4 py-2 rounded-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}