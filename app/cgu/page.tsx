import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"

export const metadata = {
  title: "CGU | 89 Factory",
  description: "Conditions générales d’utilisation (exemple à adapter) de 89 Factory",
}

export default function CGUPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Conditions générales d’utilisation (CGU)
            </h1>
            <p className="text-muted-foreground">
              Exemple à adapter (France — Marseille)
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Objet</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Les présentes Conditions générales d’utilisation (CGU) encadrent l’accès et l’utilisation du site
                  89 Factory (ci-après le “Site”) ainsi que les informations proposées (menu, horaires, contact,
                  localisation).
                </p>
                <p>
                  Le Site est édité par : <strong className="text-foreground">[Nom de la société]</strong> (ci-après
                  “l’Éditeur”). Les informations légales complètes figurent dans la page{" "}
                  <Link href="/mentions-legales" className="text-primary hover:underline">
                    Mentions légales
                  </Link>
                  .
                </p>
                <p>
                  En naviguant sur le Site, l’utilisateur reconnaît avoir pris connaissance des CGU et les accepter.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Accès au site</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Le Site est accessible gratuitement à tout utilisateur disposant d’un accès à Internet. Les frais
                  liés à l’accès (matériel, logiciel, connexion) restent à la charge de l’utilisateur.
                </p>
                <p>
                  L’Éditeur s’efforce d’assurer une disponibilité continue du Site, sans garantir l’absence
                  d’interruptions (maintenance, incidents techniques, etc.).
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Informations (menu, prix)</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Les informations affichées sur le Site (produits, prix, disponibilités) sont fournies à titre
                  indicatif.
                </p>
                <p>
                  Les prix sont indiqués en euros. Le prix applicable est celui affiché au moment de la commande au
                  point de vente (food truck) ou celui confirmé lors d’un devis (événements/traiteur).
                </p>
                <p>
                  Des erreurs peuvent exceptionnellement survenir. En cas de doute, contactez-nous avant de vous
                  déplacer.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Commandes & paiement</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Les commandes sont passées directement sur place au food truck, sauf mention contraire (ex. :
                  réservation/traiteur).
                </p>
                <p>
                  Les moyens de paiement acceptés peuvent inclure l’espèce et/ou la carte bancaire selon
                  disponibilité au point de vente.
                </p>
                <p>
                  Pour les prestations traiteur/événements, les conditions (date, lieu, menu, acompte, annulation)
                  sont précisées dans un devis ou une confirmation de commande.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Allergènes</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Des informations sur les allergènes peuvent être communiquées sur demande. En cas d’allergies,
                  intolérances ou régimes spécifiques, l’utilisateur doit se renseigner avant toute commande.
                </p>
                <p>
                  Malgré le soin apporté, des traces d’allergènes peuvent subsister. L’absence totale de
                  contamination croisée ne peut être garantie.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Horaires & emplacement</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Horaires indicatifs : <strong className="text-foreground">tous les jours</strong> de{" "}
                  <strong className="text-foreground">11:00</strong> à <strong className="text-foreground">20:00</strong>.
                </p>
                <p>
                  Emplacement principal : <strong className="text-foreground">47 Cr Belsunce, 13001 Marseille</strong>.
                </p>
                <p>
                  Les horaires et l’emplacement peuvent être modifiés (météo, événements, contraintes
                  d’exploitation). Les mises à jour sont communiquées sur le Site et/ou sur les réseaux sociaux.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Propriété intellectuelle</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Le Site et l’ensemble de ses contenus (textes, images, logos, éléments graphiques) sont protégés
                  par le droit de la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans
                  autorisation préalable de l’Éditeur est interdite.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Responsabilité</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  L’Éditeur ne saurait être tenu responsable des dommages indirects résultant de l’utilisation du
                  Site. L’utilisateur demeure responsable de son équipement et de son utilisation d’Internet.
                </p>
                <p>
                  L’Éditeur ne garantit pas que le Site soit exempt d’erreurs ou d’omissions. Il peut le modifier
                  à tout moment, notamment pour mettre à jour les informations.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Données personnelles</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Les données transmises via les liens de contact (téléphone, e-mail) sont utilisées uniquement
                  pour répondre aux demandes. L’utilisateur peut exercer ses droits en contactant l’Éditeur.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Modification des CGU</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  L’Éditeur se réserve le droit de modifier les présentes CGU à tout moment. La version en vigueur
                  est celle publiée sur le Site.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Droit applicable</h2>

              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux compétents
                  seront déterminés conformément aux règles de droit applicables.
                </p>
              </div>
            </section>

            {/* Contact for Questions */}
            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Une question ?</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Pour toute question relative aux CGU, vous pouvez nous contacter :
                </p>
                <div className="mt-4 space-y-1">
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
              </div>
            </section>

            {/* Additional Links */}
            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Liens utiles</h2>
              <div className="space-y-2">
                <Link
                  href="/mentions-legales"
                  className="block text-primary hover:underline"
                >
                  → Mentions légales
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
