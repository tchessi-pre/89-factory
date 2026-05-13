"use client"

import { useState, useEffect } from "react"
import { Phone, MapPin } from "iconoir-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-pink-light border-t-4 border-pink-dark/20 shadow-2xl animate-in slide-in-from-bottom duration-300 rounded-t-xl2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Location Info with Truck */}
          <div className="flex items-center gap-2 text-ui-white">
            <img
              src="/graphics/truck.svg"
              alt="Food truck"
              className="h-8 w-8 object-contain hidden md:block"
            />
            <div className="flex items-center gap-2 text-sm text-brand-purple ">
              <MapPin className="w-4 h-4" />
              <span className="font-bold text-brand-purple">Tous les jours</span>
              <span className="hidden sm:inline">• 47 Cr Belsunce, 13001 Marseille</span>
            </div>
          </div>

          {/* Call to Action */}
          <a
            href="tel:+4917622245627"
            className="group flex items-center gap-2 px-6 py-2.5 bg-pink-dark text-ui-white font-black tracking-wider rounded-lg hover:bg-brand-purple-soft transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span>APPELER MAINTENANT</span>
          </a>
        </div>
      </div>
    </div>
  )
}
