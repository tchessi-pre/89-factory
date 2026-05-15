import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { homeStructuredData } from "@/lib/structured-data"

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
      />
      <main className="min-h-screen bg-purple-gradient">
        <Header />
        <Hero />
        <MenuSection />
        <LocationSection />
        <ContactSection />
        <Footer />
        <StickyCTA />
      </main>
    </>
  )
}
