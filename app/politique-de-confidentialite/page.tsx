import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"

export const metadata = {
  title: "Politique de confidentialité | 89 Factory",
  description: "Protection des données personnelles (RGPD) — 89 Factory",
}

export default function PolitiqueDeConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l’accueil</span>
          </Link>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Politique de confidentialité</h1>
            <p className="text-muted-foreground">Protection des données personnelles (RGPD) — exemple à adapter (France)</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsable du traitement</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Le responsable du traitement des données personnelles est :</p>
                <div className="bg-secondary/30 p-4 rounded mt-2">
                  <p className="font-semibold text-foreground">[Nom de la société]</p>
                  <p>47 Cr Belsunce</p>
                  <p>13001 Marseille</p>
                  <p className="mt-2">
                    Téléphone :{" "}
                    <a href="tel:+336000000000" className="text-primary hover:underline">
                      +33 60000 0000000
                    </a>
                  </p>
                  <p>
                    E-mail :{" "}
                    <a href="mailto:89factory@gmail.com" className="text-primary hover:underline">
                      89factory@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Données collectées</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  <strong className="text-foreground">Navigation :</strong> données techniques (type de navigateur, système
                  d’exploitation, pages consultées, date/heure, adresse IP) via les journaux du serveur.
                </p>
                <p>
                  <strong className="text-foreground">Contact :</strong> lorsque vous nous contactez par téléphone ou e-mail,
                  nous traitons les informations que vous communiquez (ex. : nom, contenu de la demande).
                </p>
                <p>
                  <strong className="text-foreground">Mesure d’audience :</strong> le site peut utiliser Vercel Analytics pour
                  mesurer l’audience et améliorer l’expérience.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalités et bases légales</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Les traitements sont réalisés pour : répondre à vos demandes, assurer la sécurité et le bon fonctionnement
                  du site, et analyser la fréquentation.
                </p>
                <p>
                  Bases légales possibles : intérêt légitime (sécurité/maintenance), exécution de mesures précontractuelles
                  (réponse aux demandes), consentement (mesure d’audience si applicable).
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Le site peut utiliser des cookies techniques nécessaires à son fonctionnement. Selon la configuration, des
                  cookies de mesure d’audience peuvent également être utilisés.
                </p>
                <p>Vous pouvez gérer les cookies via les paramètres de votre navigateur.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Durées de conservation</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Demandes reçues par e-mail/téléphone : durée nécessaire au traitement, puis archivage limité.</p>
                <p>Journaux techniques : durée limitée (généralement quelques mois), selon l’hébergeur.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Vos droits</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Vous disposez des droits d’accès, rectification, effacement, opposition, limitation et portabilité dans les
                  conditions prévues par le RGPD.
                </p>
                <p>
                  Pour exercer vos droits : contactez-nous à{" "}
                  <a href="mailto:89factory@gmail.com" className="text-primary hover:underline">
                    89factory@gmail.com
                  </a>
                  .
                </p>
                <p>
                  Vous pouvez également introduire une réclamation auprès de la{" "}
                  <a
                    href="https://www.cnil.fr"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CNIL
                  </a>
                  .
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Hébergement</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Le site est hébergé par{" "}
                  <a href="https://vercel.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    Vercel
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Additional Links */}
            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Documents</h2>
              <div className="space-y-2">
                <Link href="/mentions-legales" className="block text-primary hover:underline">
                  → Mentions légales
                </Link>
                <Link href="/cgu" className="block text-primary hover:underline">
                  → Conditions générales d’utilisation (CGU)
                </Link>
              </div>
            </section>

            {/* Last Updated */}
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
