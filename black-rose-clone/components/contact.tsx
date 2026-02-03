"use client"

import { useEffect, useRef } from "react"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+48 XXX XXX XXX",
    link: "tel:+48XXXXXXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    content: "kontakt@blackrose.pl",
    link: "mailto:kontakt@blackrose.pl",
  },
  {
    icon: MapPin,
    title: "Adres",
    content: "ks. Barabasza 6, 43-502 Czechowice-Dziedzice",
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Godziny",
    content: "Pn-Pt: 9-18 | Sb: 9-14",
  },
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "-50px" }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="kontakt" ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Large decorative number */}
      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span
          className="decorative-number text-[60vw] lg:text-[40vw] opacity-10"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          05
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-[#F8B4C8] mb-4">
            Kontakt
          </p>
          <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-6xl text-[#1A1A1A] leading-tight">
            Skontaktuj się
            <br />
            <span
              className="italic text-[#F8B4C8]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              z nami
            </span>
          </h2>
          <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#F8B4C8] mt-6 mx-auto" />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div
                key={index}
                className={`animate-on-scroll animate-fade-in-up group relative bg-[#FFF5F8] p-6 rounded-sm card-hover`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 group-hover:bg-[#F8B4C8] transition-colors">
                  <Icon className="w-5 h-5 text-[#F8B4C8] group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-[15px] font-medium text-[#1A1A1A] mb-2">{info.title}</h3>

                {info.link ? (
                  <a
                    href={info.link}
                    className="text-[14px] text-[#4A4A4A] hover:text-[#F8B4C8] transition-colors block leading-relaxed"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-[14px] text-[#4A4A4A] leading-relaxed">{info.content}</p>
                )}

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F8B4C8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="animate-on-scroll animate-scale-in delay-500 relative bg-[#1A1A1A] rounded-sm p-10 lg:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8B4C8] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F8B4C8] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative text-center max-w-2xl mx-auto">
            <h3
              className="text-3xl lg:text-4xl text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Gotowa na{" "}
              <span className="italic text-[#F8B4C8]">transformację</span>?
            </h3>

            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Zarezerwuj wizytę online i doświadcz profesjonalnej obsługi w Black Rose
            </p>

            <button className="pill-button pill-button-secondary flex items-center gap-2 mx-auto text-[15px]">
              <span>Zarezerwuj wizytę teraz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
