import { Phone, Mail, MapPin, Instagram } from "iconoir-react"
import { SectionHeader } from "./section-header"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-purple-gradient">
      <div className="absolute inset-0 bg-purple-gradient opacity-80" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-dark/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-purple-soft/20 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="CONTACT"
          subtitle="Vous avez des questions ou souhaitez nous réserver pour un événement ? Contactez-nous !"
          className="text-center mb-12 md:mb-16"
          subtitleClassName="text-lg text-ui-white/80 max-w-2xl mx-auto mb-8 text-shadow-lg"
        />

        {/* Contact Cards - Centered Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="group p-8 bg-ui-white/10 backdrop-blur-sm rounded-3xl flex flex-col items-center text-center space-y-4 border border-ui-white/10 shadow-menu hover:border-pink-light/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-dark to-brand-purple rounded-full flex items-center justify-center shadow-[0_10px_28px_rgba(75,31,74,0.25)] ring-1 ring-ui-white/25">
              <Phone className="w-8 h-8 text-ui-white" />
            </div>
            <div>
              <p className="text-ui-white/70 text-sm mb-2">Téléphone</p>
              <a
                href="tel:+4917622245627"
                className="text-2xl md:text-3xl font-black text-ui-white group-hover:text-pink-light transition-colors"
              >
                +33 06 00 00 00 00
              </a>
            </div>
            <p className="text-sm text-ui-white/70">Appelez-nous directement</p>
          </div>

          {/* Email Card */}
          <div className="group p-8 bg-ui-white/10 backdrop-blur-sm rounded-3xl flex flex-col items-center text-center space-y-4 border border-ui-white/10 shadow-menu hover:border-pink-light/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-dark to-brand-purple rounded-full flex items-center justify-center shadow-[0_10px_28px_rgba(75,31,74,0.25)] ring-1 ring-ui-white/25">
              <Mail className="w-8 h-8 text-ui-white" />
            </div>
            <div>
              <p className="text-ui-white/70 text-sm mb-2">E-mail</p>
              <a
                href="mailto:flavor.bytes.gmbh@gmail.com"
                className="text-lg md:text-xl font-bold text-ui-white group-hover:text-pink-light transition-colors break-all"
              >
                89factory@gmail.com
              </a>
            </div>
            <p className="text-sm text-ui-white/70">Écrivez-nous un e-mail</p>
          </div>

          {/* Instagram Card */}
          <div className="group p-8 bg-ui-white/10 backdrop-blur-sm rounded-3xl flex flex-col items-center text-center space-y-4 border border-ui-white/10 shadow-menu hover:border-pink-light/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-dark to-brand-purple rounded-full flex items-center justify-center shadow-[0_10px_28px_rgba(75,31,74,0.25)] ring-1 ring-ui-white/25">
              <Instagram className="w-8 h-8 text-ui-white" />
            </div>
            <div>
              <p className="text-ui-white/70 text-sm mb-2">Instagram</p>
              <a
                href="https://www.instagram.com/thefoodiewagon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-bold text-ui-white group-hover:text-pink-light transition-colors"
              >
                @89Factory
              </a>
            </div>
            <p className="text-sm text-ui-white/70">Suivez-nous sur Instagram</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-ui-white/10 backdrop-blur-sm rounded-3xl border border-ui-white/10 shadow-menu text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-pink-light" />
            <h3 className="text-2xl font-black text-ui-white">Venez nous voir</h3>
          </div>
          <p className="text-lg text-ui-white/85 mb-2">
            <strong className="text-pink-light">Tous les jours</strong> de 09:00 à 20:00
          </p>
          <p className="text-ui-white/75">47 Cr Belsunce, 13001 Marseille</p>
          <p className="text-sm text-ui-white/70 mt-4">
            Contact : <strong className="text-ui-white">Service client</strong> (89 Factory)
          </p>
        </div>
      </div>
    </section>
  )
}
