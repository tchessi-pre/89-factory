"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
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
      "text-foreground hover:text-primary transition-colors font-medium tracking-wide",
      isMobile ? "py-2" : "",
      isActive ? "text-primary" : "",
    ]
      .filter(Boolean)
      .join(" ")

  const handleNavClick = (hash: string, closeMobileMenu?: boolean) => {
    setActiveFromHash(hash)
    if (closeMobileMenu) setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/graphics/logo-89-round.svg"
              alt="89 Factory"
              className="h-8 w-8 md:h-12 md:w-12"
            />
            <div className="hidden sm:block">
              <h1 className="text-gray-50 font-bold text-xl md:text-2xl tracking-wider uppercase">89 Factory</h1>
              <p className="text-muted-foreground text-xs">LE GOÛT QUI FRAPPE</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#top"
              className={getNavLinkClassName(pathname === "/" && activeHash === "#top")}
              aria-current={pathname === "/" && activeHash === "#top" ? "page" : undefined}
              onClick={() => handleNavClick("#top")}
            >
              Accueil
            </Link>
            <Link
              href="/#menu"
              className={getNavLinkClassName(pathname === "/" && activeHash === "#menu")}
              aria-current={pathname === "/" && activeHash === "#menu" ? "page" : undefined}
              onClick={() => handleNavClick("#menu")}
            >
              Menu
            </Link>
            <Link
              href="/#location"
              className={getNavLinkClassName(pathname === "/" && activeHash === "#location")}
              aria-current={pathname === "/" && activeHash === "#location" ? "page" : undefined}
              onClick={() => handleNavClick("#location")}
            >
              Emplacement
            </Link>
            <Link
              href="/#contact"
              className={getNavLinkClassName(pathname === "/" && activeHash === "#contact")}
              aria-current={pathname === "/" && activeHash === "#contact" ? "page" : undefined}
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </Link>
            <div className="flex items-center gap-2">
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
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Ouvrir/fermer le menu"
          >
            {isOpen ? <Xmark className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/#top"
                className={getNavLinkClassName(pathname === "/" && activeHash === "#top", true)}
                aria-current={pathname === "/" && activeHash === "#top" ? "page" : undefined}
                onClick={() => handleNavClick("#top", true)}
              >
                Accueil
              </Link>
              <Link
                href="/#menu"
                className={getNavLinkClassName(pathname === "/" && activeHash === "#menu", true)}
                aria-current={pathname === "/" && activeHash === "#menu" ? "page" : undefined}
                onClick={() => handleNavClick("#menu", true)}
              >
                Menu
              </Link>
              <Link
                href="/#location"
                className={getNavLinkClassName(pathname === "/" && activeHash === "#location", true)}
                aria-current={pathname === "/" && activeHash === "#location" ? "page" : undefined}
                onClick={() => handleNavClick("#location", true)}
              >
                Emplacement
              </Link>
              <Link
                href="/#contact"
                className={getNavLinkClassName(pathname === "/" && activeHash === "#contact", true)}
                aria-current={pathname === "/" && activeHash === "#contact" ? "page" : undefined}
                onClick={() => handleNavClick("#contact", true)}
              >
                Contact
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-accent">
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
