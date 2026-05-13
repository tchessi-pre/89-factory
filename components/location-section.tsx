import { MapPin, Clock, Calendar } from "iconoir-react"
import { SectionHeader } from "./section-header"

export function LocationSection() {
  return (
    <section id="location" className="relative py-20 md:py-32 overflow-hidden bg-purple-gradient">
      <div className="absolute inset-0 bg-purple-gradient opacity-80" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-dark/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-purple-soft/20 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="EMPLACEMENT"
          subtitle="Retrouvez-nous au 47 Cr Belsunce, 13001 Marseille"
          className="text-center mb-12 md:mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-ui-white/5 border border-ui-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
            <iframe
              title="Carte : 47 Cr Belsunce, 13001 Marseille"
              src="https://www.google.com/maps?q=47%20Cr%20Belsunce%2C%2013001%20Marseille&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            {/* Main Location Card */}
            <div className="p-8 bg-ui-white/10 backdrop-blur-sm border border-ui-white/10 rounded-3xl shadow-menu">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-ui-white/10 rounded-full flex items-center justify-center flex-shrink-0 ring-1 ring-ui-white/15">
                  <MapPin className="w-6 h-6 text-pink-light" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-ui-white mb-2 tracking-tight">Emplacement principal</h3>
                  <p className="text-lg text-ui-white/75">
                    47 Cr Belsunce
                    <br />
                    13001 Marseille
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-ui-white/10 rounded-full flex items-center justify-center flex-shrink-0 ring-1 ring-ui-white/15">
                  <Calendar className="w-6 h-6 text-pink-light" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-ui-white mb-2 tracking-tight">Tous les jours !</h3>
                  <p className="text-ui-white/75">Venez nous voir tous les jours pour des burgers frais et plus encore</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ui-white/10 rounded-full flex items-center justify-center flex-shrink-0 ring-1 ring-ui-white/15">
                  <Clock className="w-6 h-6 text-pink-light" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-ui-white mb-2 tracking-tight">Horaires</h3>
                  <p className="text-ui-white/75">Tous les jours : 9:00 - 20:00</p>
                </div>
              </div>
            </div>

            {/* Events Banner */}
            <div className="p-6 bg-ui-white/10 backdrop-blur-sm border border-ui-white/10 rounded-3xl shadow-menu">
              <h4 className="text-xl font-black text-pink-light mb-2 tracking-tight">Soirées, événements & festivals</h4>
              <p className="text-ui-white/80">
                Nous assurons aussi le service traiteur pour vos événements privés ! Contactez-nous pour des offres sur mesure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
