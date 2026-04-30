"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, FastArrowRight, Phone } from "iconoir-react"
import Link from "next/link"

export function Hero() {
  const [showContent, setShowContent] = useState(false)
  const hasRevealedRef = useRef(false)

  const reveal = () => {
    if (hasRevealedRef.current) return
    hasRevealedRef.current = true
    window.setTimeout(() => setShowContent(true), 3000)
  }

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowContent(true)
    }, 5000)

    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/cheeseburger-with-steaming-patty-and-fresh.mp4"
        autoPlay
        muted
        loop
        playsInline
        onPlaying={reveal}
        onCanPlay={reveal}
      />
      <div className="absolute inset-0 bg-black/60" />
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-amber-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-3xl">
            {/* Halal Badge */}
            <div className="inline-flex items-center gap-3 mb-6">
              <img
                src="/graphics/halal logo.svg"
                alt="Certifié 100% halal"
                className="h-16 w-auto"
              />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
              <span className="text-foreground">89</span>
              <br />
              <span className="text-foreground">FACTORY</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light tracking-wide mb-8 max-w-2xl mx-auto">
              LE GOÛT QUI FRAPPE
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Burgers halal premium, fried chicken croustillant et currywurst authentique
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="tel:+4917622245627"
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wider rounded-lg hover:bg-primary/90 transition-all shadow-2xl shadow-primary/50 w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                +33 06 00 00 00 00
              </a>
              <Link
                href="#menu"
                className="group flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold tracking-wider rounded-lg hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto justify-center"
              >
                VOIR LE MENU
                <FastArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Location Badge with Truck Icon - Large & Prominent */}
            {/* <div className="max-w-xl mx-auto mb-16 p-6 md:p-8 bg-primary/10 rounded-2xl border-2 border-primary/30 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-4 md:gap-6">
                <img
                  src="/graphics/truck.svg"
                  alt="Food truck"
                  className="h-16 w-16 md:h-20 md:w-20 object-contain flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-primary font-black text-2xl md:text-3xl lg:text-4xl mb-1">Chaque samedi</p>
                  <p className="text-foreground font-bold text-base md:text-lg lg:text-xl">Am Westpark 7, Ingolstadt</p>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">11:00 - 20:00</p>
                </div>
              </div>
            </div> */}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto md:mx-0">
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">11+</p>
                <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">BURGERS</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">10+</p>
                <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">SAUCES</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">HALAL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
