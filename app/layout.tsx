import type React from "react"
import type { Metadata } from "next"
import { Urbanist, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "Today Junk Removal | Fast & Affordable Junk Removal in Winnipeg",
  description:
    "Professional junk removal and cleanup services across Winnipeg & nearby areas. Same-day pickup, eco-friendly disposal, and budget-friendly pricing. Call 204-698-4469 for a free quote.",
  keywords: [
    "junk removal Winnipeg",
    "furniture removal",
    "appliance removal",
    "construction debris cleanup",
    "yard waste removal",
    "garage cleanout",
    "basement cleanout",
    "same-day junk removal",
    "eco-friendly disposal",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Today Junk Removal | Fast & Affordable Junk Removal in Winnipeg",
    description:
      "Professional junk removal and cleanup services across Winnipeg & nearby areas. Same-day pickup, eco-friendly disposal, and budget-friendly pricing.",
    type: "website",
    locale: "en_CA",
    url: "https://todayjunkremoval.com",
    siteName: "Today Junk Removal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Today Junk Removal | Fast & Affordable Junk Removal in Winnipeg",
    description: "Professional junk removal services across Winnipeg. Same-day pickup available.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://todayjunkremoval.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Today Junk Removal",
              image: "https://todayjunkremoval.com/og-image.jpg",
              description:
                "Professional junk removal and cleanup services across Winnipeg & nearby areas. Same-day pickup, eco-friendly disposal, and budget-friendly pricing.",
              telephone: "204-698-4469",
              email: "todayjunkremoval@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Winnipeg",
                addressRegion: "MB",
                addressCountry: "CA",
              },
              areaServed: ["Winnipeg", "St. Vital", "St. Boniface", "Transcona", "St. James", "North End"],
              priceRange: "$99-$249",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/todayjunkremoval",
                "https://www.instagram.com/todayjunkremoval",
                "https://twitter.com/todayjunkremoval",
              ],
            }),
          }}
        />
      </head>
      <body className={`${urbanist.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
