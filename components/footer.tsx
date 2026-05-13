import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, Mail, MapPin } from "iconoir-react"

export function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden bg-purple-gradient">
      <div className="absolute inset-0 bg-purple-gradient opacity-80" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-dark/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-purple-soft/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/89factory-logo.png"
                alt="89 Factory"
                width={96}
                height={96}
                className="h-12 w-auto object-contain drop-shadow-sm"
              />
              <div>
                <h3 className="text-ui-white font-bold text-lg tracking-wider uppercase">89 Factory</h3>
                <p className="text-ui-white/70 text-xs tracking-widest">Ici c&apos;est Marseille</p>
              </div>
            </div>
            <p className="text-ui-white/75 text-sm mb-3">
              Street food halal premium à Marseille. Burgers, poulet frit, currywurst et plus encore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-pink-light font-black mb-4 tracking-wide">LIENS RAPIDES</h4>
            <nav className="space-y-2">
              <Link href="/#menu" className="block text-ui-white/75 hover:text-pink-light transition-colors">
                Menu
              </Link>
              <Link href="/#location" className="block text-ui-white/75 hover:text-pink-light transition-colors">
                Emplacement
              </Link>
              <Link href="/#contact" className="block text-ui-white/75 hover:text-pink-light transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-pink-light font-black mb-4 tracking-wide">CONTACT</h4>
            <div className="space-y-3">
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 text-ui-white/75 hover:text-pink-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                +33 6000000000
              </a>
              <a
                href="mailto:flavor.bytes.gmbh@gmail.com"
                className="flex items-center gap-2 text-ui-white/75 hover:text-pink-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                89factory@gmail.com
              </a>
              <p className="flex items-start gap-2 text-ui-white/75">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                47 Cr Belsunce, 13001 Marseille
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ui-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-ui-white/70 text-sm">
              <p>© {new Date().getFullYear()} 89 Factory. Tous droits réservés.</p>
              <span className="hidden md:inline">•</span>
              <Link href="/mentions-legales" className="hover:text-pink-light transition-colors">
                Mentions légales
              </Link>
              <span>•</span>
              <Link href="/cgu" className="hover:text-pink-light transition-colors">
                CGU
              </Link>
              <span>•</span>
              <Link href="/politique-de-confidentialite" className="hover:text-pink-light transition-colors">
                Politique de confidentialité
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/graphics/halal logo.svg"
                alt="Certifié 100% halal"
                className="h-10 md:h-12 w-auto"
              />
              <a
                href="https://www.instagram.com/thefoodiewagon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-ui-white/10 rounded-full flex items-center justify-center text-ui-white hover:text-pink-light hover:bg-ui-white/15 transition-all border border-ui-white/10"
                aria-label="Instagram - 89 Factory"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
