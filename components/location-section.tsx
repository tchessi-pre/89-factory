import { MapPin, Clock, Calendar } from "iconoir-react"

export function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Truck Icon */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="/graphics/truck.svg"
              alt="Food truck"
              className="h-16 w-16 object-contain"
            />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-tight">EMPLACEMENT</h2>
            <img
              src="/graphics/truck.svg"
              alt="Food truck"
              className="h-16 w-16 object-contain transform scale-x-[-1]"
            />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez-nous au 47 Cr Belsunce, 13001 Marseille
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-secondary">
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
            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Emplacement principal</h3>
                  <p className="text-lg text-muted-foreground">
                    47 Cr Belsunce
                    <br />
                    13001 Marseille
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Tous les jours !</h3>
                  <p className="text-muted-foreground">Venez nous voir tous les jours pour des burgers frais et plus encore</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Horaires</h3>
                  <p className="text-muted-foreground">Tous les jours : 9:00 - 20:00</p>
                </div>
              </div>
            </div>

            {/* Events Banner */}
            <div className="p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <h4 className="text-xl font-bold text-primary mb-2">Soirées, événements & festivals</h4>
              <p className="text-foreground">
                Nous assurons aussi le service traiteur pour vos événements privés ! Contactez-nous pour des offres sur mesure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
