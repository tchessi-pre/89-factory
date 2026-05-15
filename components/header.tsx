"use client"

import { useEffect, useState } from "react"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Xmark, MapPin } from "iconoir-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
    if (pathname !== "/") return

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search)
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    setActiveHash("#top")

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto"
      }
    }
  }, [pathname])

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 4)
    }

    updateScrolled()
    window.addEventListener("scroll", updateScrolled, { passive: true })
    return () => window.removeEventListener("scroll", updateScrolled)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen])

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
      "inline-flex items-center rounded-lg font-medium tracking-wide transition-all duration-200",
      "text-ui-white/90 hover:text-ui-white",
      "hover:bg-ui-white/10 hover:scale-[1.03]",
      isMobile ? "px-4 py-3 text-base" : "px-3 py-2 text-sm",
      isActive
        ? "text-pink-light bg-ui-white/10 shadow-[inset_0_-2px_0_0] shadow-pink-light/70"
        : "",
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-purple-gradient backdrop-blur-md border-b border-black/35 ring-4 ring-black/45 ring-inset transition-shadow ${isScrolled ? "shadow-2xl shadow-black/35" : "shadow-lg shadow-black/20"
        }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.55)_1px,transparent_0)] [background-size:14px_14px]"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <Image
              src="/89factory-logo.png"
              alt="89 Factory"
              width={256}
              height={256}
              priority
              className="h-16 w-24 md:h-18 drop-shadow-sm"
            />
            <div className="block min-w-0 max-w-[9.5rem] sm:max-w-none">
              <p className="text-ui-white font-bold text-2xl sm:text-xl md:text-2xl tracking-wider uppercase leading-none truncate">
                89 Factory
              </p>
              <p className="text-ui-white/70 text-sm sm:text-sm md:text-xs tracking-widest mt-0.5 truncate">
                Ici c&apos;est Marseille
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
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
            <div className="flex items-center gap-2 ml-3 pl-3 border-l border-ui-white/20">
              <div className="flex items-center gap-1.5 text-pink-light bg-ui-white/10 rounded-full px-3 py-1.5">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Belsunce</span>
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Image
              src="/graphics/halal logo.svg"
              alt="100% Halal"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ui-white hover:text-pink-light transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <Xmark className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="py-4 border-t border-ui-white/10" aria-label="Navigation mobile">
            <div className="flex flex-col gap-2">
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
                <div className="flex items-center gap-2 text-pink-light bg-ui-white/10 rounded-full px-3 py-1.5">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Belsunce</span>
                </div>
                <Image
                  src="/graphics/halal logo.svg"
                  alt="100% Halal"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
