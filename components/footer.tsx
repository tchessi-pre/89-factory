import Link from "next/link"
import { Instagram, Phone, Mail, MapPin } from "iconoir-react"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/graphics/fooiewagen logo.svg"
                alt="89 Factory"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-primary font-bold text-lg tracking-wider uppercase">89 Factory</h3>
                <p className="text-muted-foreground text-xs tracking-widest">LÀ OÙ LA SAVEUR PREND LA ROUTE</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              Street food halal premium à Marseille. Burgers, poulet frit, currywurst et plus encore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4 tracking-wide">LIENS RAPIDES</h4>
            <nav className="space-y-2">
              <Link href="#menu" className="block text-muted-foreground hover:text-primary transition-colors">
                Menu
              </Link>
              <Link href="#location" className="block text-muted-foreground hover:text-primary transition-colors">
                Emplacement
              </Link>
              <Link href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-4 tracking-wide">CONTACT</h4>
            <div className="space-y-3">
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +33 6000000000
              </a>
              <a
                href="mailto:flavor.bytes.gmbh@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                89factory@gmail.com
              </a>
              <p className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                47 Cr Belsunce, 13001 Marseille
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
              <p>© {new Date().getFullYear()} 89 Factory Tous droits réservés.</p>
              <span className="hidden md:inline">•</span>
              <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <span>•</span>
              <Link href="/cgu" className="hover:text-primary transition-colors">
                CGU
              </Link>
              <span>•</span>
              <Link href="/politique-de-confidentialite" className="hover:text-primary transition-colors">
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
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground hover:text-primary hover:bg-secondary/80 transition-all"
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
