import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"

export const metadata = {
  title: "Mentions légales | 89 Factory",
  description: "Mentions légales (exemple à adapter) et coordonnées de 89 Factory",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l’accueil</span>
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Mentions légales</h1>
            <p className="text-muted-foreground">Exemple à adapter (France — Marseille)</p>
          </div>

          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Éditeur du site</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Nom commercial :</strong> 89 Factory
                </p>
                <p>
                  <strong className="text-foreground">Raison sociale :</strong> [Nom de la société]
                </p>
                <p>
                  <strong className="text-foreground">Forme juridique :</strong> [SAS / SARL / Auto-entrepreneur]
                </p>
                <p>
                  <strong className="text-foreground">SIRET :</strong> [N° SIRET]
                </p>
                <p>
                  <strong className="text-foreground">RCS :</strong> [RCS Marseille n° …]
                </p>
                <p>
                  <strong className="text-foreground">N° TVA intracom :</strong> [FR …]
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Adresse</h2>
              <div className="space-y-1 text-muted-foreground">
                <p>[Nom de la société]</p>
                <p>47 Cr Belsunce</p>
                <p>13001 Marseille</p>
                <p>France</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Téléphone :</strong>{" "}
                  <a href="tel:+336000000000" className="text-primary hover:underline">
                    +33 60000 0000000
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">E-mail :</strong>{" "}
                  <a href="mailto:89factory@gmail.com" className="text-primary hover:underline">
                    89factory@gmail.com
                  </a>
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Responsable de la publication</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Nom :</strong> Sohaib
                </p>
                <p>
                  <strong className="text-foreground">Fonction :</strong> [Gérant / Président]
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Hébergeur</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Hébergeur :</strong> [Nom de l’hébergeur]
                </p>
                <p>
                  <strong className="text-foreground">Adresse :</strong> [Adresse de l’hébergeur]
                </p>
                <p>
                  <strong className="text-foreground">Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://vercel.com
                  </a>
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Informations produits</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Certification :</strong> Certifié 100% halal
                </p>
                <p className="text-sm">
                  Les informations affichées (ingrédients, allergènes, prix) sont indicatives et peuvent évoluer.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Conditions d’utilisation</h2>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Contenu</h3>
                  <p className="text-sm">
                    Le contenu du site est fourni à titre informatif. Malgré le soin apporté, l’éditeur ne peut
                    garantir l’exactitude, l’exhaustivité ou l’actualité des informations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Liens hypertextes</h3>
                  <p className="text-sm">
                    Le site peut contenir des liens vers des sites tiers. L’éditeur n’exerce aucun contrôle sur ces
                    sites et décline toute responsabilité quant à leur contenu.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Droits d’auteur</h3>
                  <p className="text-sm">
                    Tous les contenus (textes, images, logos, éléments graphiques) sont protégés par le droit
                    d’auteur. Toute reproduction, représentation ou diffusion, totale ou partielle, sans
                    autorisation préalable est interdite.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Données personnelles (RGPD)</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Les données collectées via les liens de contact (téléphone, e-mail) sont utilisées uniquement pour
                  répondre à vos demandes.
                </p>
                <p>
                  Vous pouvez exercer vos droits (accès, rectification, suppression) en nous contactant à l’adresse
                  e-mail indiquée ci-dessus.
                </p>
              </div>
            </section>

            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Documents</h2>
              <div className="space-y-2">
                <Link href="/cgu" className="block text-primary hover:underline">
                  → Conditions générales d’utilisation (CGU)
                </Link>
              </div>
            </section>

            <div className="text-sm text-muted-foreground text-center pt-8 border-t border-border">
              <p>Mis à jour : décembre 2026</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
