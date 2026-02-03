"use client"

import { Facebook, Instagram, Mail, ArrowUpRight } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Manicure & Pedicure", href: "#uslugi" },
    { label: "Oprawa Oka", href: "#uslugi" },
    { label: "Zabiegi na Twarz", href: "#uslugi" },
    { label: "Metamorfozy", href: "#metamorfozy" },
    { label: "Galeria", href: "#galeria" },
  ],
  info: [
    { label: "O nas", href: "#o-nas" },
    { label: "Zespół", href: "#zespol" },
    { label: "Cennik", href: "#cennik" },
    { label: "Promocje", href: "#promocje" },
    { label: "Opinie", href: "#opinie" },
    { label: "FAQ", href: "#faq" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:kontakt@blackrose.pl", label: "Email" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] overflow-hidden">
      {/* Large decorative number */}
      <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/4 pointer-events-none select-none">
        <span
          className="text-[40vw] lg:text-[25vw] text-white opacity-[0.02] leading-none"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          BR
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <h3
              className="text-2xl text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Black <span className="italic text-[#F8B4C8]">Rose</span>
            </h3>

            <p className="text-[14px] text-white/60 leading-relaxed mb-6 max-w-sm">
              Salon Kosmetyczny w Czechowicach-Dziedzicach.
              Profesjonalna pielęgnacja i relaks w eleganckim otoczeniu.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#F8B4C8] flex items-center justify-center transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-white/60 group-hover:text-[#1A1A1A] transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[13px] tracking-[0.15em] uppercase text-[#F8B4C8] mb-6">
              Usługi
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-[14px] text-white/60 hover:text-[#F8B4C8] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h4 className="text-[13px] tracking-[0.15em] uppercase text-[#F8B4C8] mb-6">
              Informacje
            </h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-[14px] text-white/60 hover:text-[#F8B4C8] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[13px] tracking-[0.15em] uppercase text-[#F8B4C8] mb-6">
              Kontakt
            </h4>
            <div className="space-y-3 text-[14px] text-white/60">
              <p>ks. Barabasza 6</p>
              <p>43-502 Czechowice-Dziedzice</p>
              <div className="w-8 h-px bg-white/20 my-4" />
              <p>Pn-Pt: 9:00 - 18:00</p>
              <p>Sb: 9:00 - 14:00</p>
              <div className="w-8 h-px bg-white/20 my-4" />
              <a href="tel:+48XXXXXXXXX" className="hover:text-[#F8B4C8] transition-colors block">
                +48 XXX XXX XXX
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/40">
            <p>&copy; 2026 Black Rose Salon Kosmetyczny. Wszelkie prawa zastrzeżone.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#F8B4C8] transition-colors">Polityka prywatności</a>
              <a href="#" className="hover:text-[#F8B4C8] transition-colors">Regulamin</a>
            </div>
          </div>
        </div>
      </div>

      {/* Pink accent line at bottom */}
      <div className="h-1 bg-[#F8B4C8]" />
    </footer>
  )
}
