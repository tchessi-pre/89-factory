"use client"

import { useEffect, useState } from "react"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Xmark, MapPin } from "iconoir-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState("#top")

  const normalizeHash = (hash: string) => {
    if (!hash || hash === "#") return "#top"
    return hash
  }

  const setActiveFromHash = (hash: string) => {
    setActiveHash(normalizeHash(hash))
  }

  useEffect(() => {
    const updateFromLocation = () => {
      setActiveFromHash(window.location.hash)
    }

    updateFromLocation()

    window.addEventListener("hashchange", updateFromLocation)
    window.addEventListener("popstate", updateFromLocation)
    return () => {
      window.removeEventListener("hashchange", updateFromLocation)
      window.removeEventListener("popstate", updateFromLocation)
    }
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") return

    const sectionIds = ["top", "menu", "location", "contact"] as const
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        const topMost = visible[0]
        const id = topMost?.target?.id
        if (id) setActiveHash(`#${id}`)
      },
      { root: null, rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  const getNavLinkClassName = (isActive: boolean, isMobile?: boolean) =>
    [
      "inline-flex items-center rounded-lg font-medium tracking-wide transition-colors",
      "text-ui-white/90 hover:text-ui-white hover:bg-ui-white/10",
      isMobile ? "px-3 py-2" : "px-3 py-2",
      isActive ? "text-pink-light bg-ui-white/10" : "",
    ]
      .filter(Boolean)
      .join(" ")

  const handleNavClick = (hash: string, closeMobileMenu?: boolean) => {
    setActiveFromHash(hash)
    if (closeMobileMenu) setIsOpen(false)
  }

  const scrollToHash = (hash: string) => {
    const id = normalizeHash(hash).replace("#", "")
    const target = document.getElementById(id)
    if (!target) return

    const header = document.querySelector("header")
    const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 0
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8

    window.scrollTo({ top, behavior: "smooth" })
  }

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
    closeMobileMenu?: boolean
  ) => {
    handleNavClick(hash, closeMobileMenu)

    if (pathname !== "/") return

    e.preventDefault()
    window.history.pushState(null, "", normalizeHash(hash))
    scrollToHash(hash)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purple-gradient backdrop-blur-sm border-b border-ui-white/10 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/89factory-logo.png"
              alt="89 Factory"
              width={256}
              height={256}
              priority
              className="h-10 w-auto md:h-12 drop-shadow-sm"
            />
            <div className="hidden sm:block">
              <h1 className="text-ui-white font-bold text-xl md:text-2xl tracking-wider uppercase leading-none">
                89 Factory
              </h1>
              <p className="text-ui-white/70 text-xs tracking-widest mt-1">Ici c&apos;est Marseille</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/#top"
              className={getNavLinkClassName(pathname === "/" && activeHash === "#top")}
              aria-current={pathname === "/" && activeHash === "#top" ? "page" : undefined}
              onClick={(e) => handleAnchorClick(e, "#top")}
            >
              Accueil
            </Link>
            <Link
              href="/#menu"
              className={getNavLinkClassName(pathname === "/" && activeHash === "#menu")}
              aria-current={pathname === "/" && activeHash === "#menu" ? "page" : undefined}
              onClick={(e) => handleAnchorClick(e, "#menu")}
            >
              Menu
            </Link>
            <Link
              href="/#location"
              className={getNavLinkClassName(pathname === "/" && activeHash === "#location")}
              aria-current={pathname === "/" && activeHash === "#location" ? "page" : undefined}
              onClick={(e) => handleAnchorClick(e, "#location")}
            >
              Emplacement
            </Link>
            <Link
              href="/#contact"
              className={getNavLinkClassName(pathname === "/" && activeHash === "#contact")}
              aria-current={pathname === "/" && activeHash === "#contact" ? "page" : undefined}
              onClick={(e) => handleAnchorClick(e, "#contact")}
            >
              Contact
            </Link>
            <div className="flex items-center gap-2 text-pink-light">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Belsunce</span>
            </div>
          </nav>

          {/* Halal Badge */}
          <div className="hidden lg:flex items-center gap-4">
            <img
              src="/graphics/halal logo.svg"
              alt="100% Halal"
              className="h-12 w-auto"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ui-white hover:text-pink-light transition-colors"
            aria-label="Ouvrir/fermer le menu"
          >
            {isOpen ? <Xmark className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-ui-white/10">
            <div className="flex flex-col gap-4">
              <Link
                href="/#top"
                className={getNavLinkClassName(pathname === "/" && activeHash === "#top", true)}
                aria-current={pathname === "/" && activeHash === "#top" ? "page" : undefined}
                onClick={(e) => handleAnchorClick(e, "#top", true)}
              >
                Accueil
              </Link>
              <Link
                href="/#menu"
                className={getNavLinkClassName(pathname === "/" && activeHash === "#menu", true)}
                aria-current={pathname === "/" && activeHash === "#menu" ? "page" : undefined}
                onClick={(e) => handleAnchorClick(e, "#menu", true)}
              >
                Menu
              </Link>
              <Link
                href="/#location"
                className={getNavLinkClassName(pathname === "/" && activeHash === "#location", true)}
                aria-current={pathname === "/" && activeHash === "#location" ? "page" : undefined}
                onClick={(e) => handleAnchorClick(e, "#location", true)}
              >
                Emplacement
              </Link>
              <Link
                href="/#contact"
                className={getNavLinkClassName(pathname === "/" && activeHash === "#contact", true)}
                aria-current={pathname === "/" && activeHash === "#contact" ? "page" : undefined}
                onClick={(e) => handleAnchorClick(e, "#contact", true)}
              >
                Contact
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-ui-white/10">
                <div className="flex items-center gap-2 text-pink-light">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">Belsunce</span>
                </div>
                <img
                  src="/graphics/halal logo.svg"
                  alt="100% Halal"
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
