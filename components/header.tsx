"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Cortex
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Features
            </a>
            <a href="#use-cases" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Use Cases
            </a>
            <a href="#security" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Security
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="text-gray-700">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              Get Early Access
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#features" className="block text-gray-600 hover:text-gray-900 font-medium">
              Features
            </a>
            <a href="#use-cases" className="block text-gray-600 hover:text-gray-900 font-medium">
              Use Cases
            </a>
            <a href="#security" className="block text-gray-600 hover:text-gray-900 font-medium">
              Security
            </a>
            <a href="#pricing" className="block text-gray-600 hover:text-gray-900 font-medium">
              Pricing
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-center">
                Sign In
              </Button>
              <Button className="w-full justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
