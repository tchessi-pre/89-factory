export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": "https://foodiewagon.de/#restaurant",
      name: "89 Factory",
      description:
        "Food truck de burgers halal premium à Marseille — steaks de bœuf maison, poulet frit croustillant, currywurst et street food authentique",
      url: "https://foodiewagon.de",
      telephone: "+33 6000000000",
      servesCuisine: ["Burger", "Halal", "Street Food", "Fast Food", "American", "German"],
      priceRange: "€€",
      image: "https://foodiewagon.de/graphics/tasty burger.svg",
      logo: "https://foodiewagon.de/graphics/fooiewagen logo.svg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "47 Cr Belsunce",
        postalCode: "13001",
        addressLocality: "Marseille",
        addressRegion: "Provence-Alpes-Côte d'Azur",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "43.2993",
        longitude: "5.3764",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "11:00",
          closes: "20:00",
        },
      ],
      paymentAccepted: "Cash, Credit Card",
      currenciesAccepted: "EUR",
    },
    {
      "@type": "FoodEstablishment",
      "@id": "https://foodiewagon.de/#foodestablishment",
      name: "89 Factory",
      hasMenu: {
        "@type": "Menu",
        hasMenuSection: [
          {
            "@type": "MenuSection",
            name: "Burgers bœuf",
            description: "Steaks hachés de bœuf maison 140 g, 100% halal",
            hasMenuItem: [
              {
                "@type": "MenuItem",
                name: "Cheesy Buffalo",
                description:
                  "Pain brioché, steak haché de bœuf 140 g, fromage, sauce burger, cornichon, oignon, tomates, salade",
                offers: {
                  "@type": "Offer",
                  price: "10.50",
                  priceCurrency: "EUR",
                },
                suitableForDiet: "https://schema.org/HalalDiet",
              },
              {
                "@type": "MenuItem",
                name: "Angry Bull",
                description: "Pain brioché, steak haché de bœuf 140 g, fromage, sauce chili cheese, jalapeño",
                offers: {
                  "@type": "Offer",
                  price: "12.00",
                  priceCurrency: "EUR",
                },
                suitableForDiet: "https://schema.org/HalalDiet",
              },
            ],
          },
          {
            "@type": "MenuSection",
            name: "Burgers poulet",
            description: "Lamelles de poulet croustillantes, 100% halal",
            hasMenuItem: [
              {
                "@type": "MenuItem",
                name: "Crunchy Chicken",
                description: "Pain brioché, lamelles de poulet, fromage, sauce burger, salade",
                offers: {
                  "@type": "Offer",
                  price: "8.50",
                  priceCurrency: "EUR",
                },
                suitableForDiet: "https://schema.org/HalalDiet",
              },
            ],
          },
          {
            "@type": "MenuSection",
            name: "Poulet frit",
            description: "Poulet frit croustillant — wings & strips",
            hasMenuItem: [
              {
                "@type": "MenuItem",
                name: "Chicken Wings",
                description: "Chicken wings croustillants — 6, 10 ou 20 pièces",
                offers: {
                  "@type": "Offer",
                  price: "7.50",
                  priceCurrency: "EUR",
                },
                suitableForDiet: "https://schema.org/HalalDiet",
              },
            ],
          },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://foodiewagon.de/#localbusiness",
      name: "89 Factory",
      description: "Food truck mobile de burgers halal et street food à Marseille",
      slogan: "Là où la saveur prend la route",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Halal Certification",
        name: "Certifié 100% halal",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://foodiewagon.de/#website",
      url: "https://foodiewagon.de",
      name: "89 Factory",
      description: "Burgers halal premium & street food à Marseille",
      publisher: {
        "@id": "https://foodiewagon.de/#restaurant",
      },
      inLanguage: "fr-FR",
    },
  ],
} as const
