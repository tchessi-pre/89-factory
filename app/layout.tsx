import type React from "react"
import type { Metadata, Viewport } from "next"
import { Oswald, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://foodiewagon.de'),
  title: {
    default: '89 Factory | Food truck halal à Marseille',
    template: '%s | 89 Factory'
  },
  description:
    "Découvre 89 Factory — ton food truck halal à Marseille : burgers premium faits maison, poulet frit croustillant, currywurst et street food authentique. Certifié 100% halal.",
  keywords: [
    "89 Factory",
    "food truck marseille",
    "burger halal marseille",
    "poulet frit marseille",
    "halal street food",
    "burger food truck",
    "currywurst halal",
    "beef burger halal",
    "chicken burger halal",
    "frites marseille",
    "halal fast food",
    "street food marseille",
    "food truck france",
    "restaurant halal marseille",
    "burger marseille",
    "chicken wings halal",
    "onion rings",
    "chili cheese nuggets",
    "halal zertifiziert",
    "hausgemachte burger"
  ],
  authors: [{ name: '89 Factory' }],
  creator: '89 Factory',
  publisher: '89 Factory',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '89 Factory | Food truck halal à Marseille',
    description: 'Burgers halal premium faits maison, poulet frit croustillant & street food authentique à Marseille. Certifié 100% halal.',
    url: 'https://foodiewagon.de',
    siteName: '89 Factory',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/graphics/tasty burger.svg',
        width: 1200,
        height: 630,
        alt: '89 Factory — burgers halal premium',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '89 Factory | Food truck halal à Marseille',
    description: 'Burgers halal premium faits maison & poulet frit croustillant à Marseille. Certifié 100% halal.',
    images: ['/graphics/tasty burger.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://foodiewagon.de" />
      </head>
      <body className={`${oswald.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
