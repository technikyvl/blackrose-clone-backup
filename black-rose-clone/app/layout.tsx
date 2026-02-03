import type React from "react"
import type { Metadata } from "next"
import { Questrial, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Black Rose - Salon Kosmetyczny w Czechowicach-Dziedzicach",
  description:
    "Odkryj prawdziwe piękno w sercu Czechowic-Dziedzic. Profesjonalna pielęgnacja i relaks w eleganckim otoczeniu.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${questrial.variable} ${playfair.variable}`}>
      <body className={`${questrial.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
