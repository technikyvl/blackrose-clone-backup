"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Manicure",
    subtitle: "& Pedicure",
    description: "Profesjonalna stylizacja paznokci, manicure hybrydowy, żelowy i klasyczny. Dbamy o każdy detal.",
    image: "/images/snapinsta.jpg",
    popular: true,
  },
  {
    number: "02",
    title: "Oprawa",
    subtitle: "Oka",
    description: "Regulacja brwi, henna, henna pudrowa z geometrią, koloryzacja rzęs. Podkreśl swoje spojrzenie.",
    image: "/images/snapinsta.jpg",
  },
  {
    number: "03",
    title: "Zabiegi",
    subtitle: "na Twarz",
    description: "Oczyszczanie manualne, peelingi, zabiegi przeciwstarzeniowe. Odmłodzona i promienna cera.",
    image: "/images/snapinsta.jpg",
  },
  {
    number: "04",
    title: "Depilacja",
    subtitle: "Woskowa",
    description: "Usuwanie owłosienia z różnych partii ciała metodą woskową. Gładka skóra na dłużej.",
    image: "/images/snapinsta.jpg",
  },
  {
    number: "05",
    title: "Zabiegi",
    subtitle: "Ciała",
    description: "Ultradźwięki, modelowanie sylwetki, zabiegi antycellulitowe. Zadbaj o całe ciało.",
    image: "/images/snapinsta.jpg",
  },
  {
    number: "06",
    title: "SPA",
    subtitle: "& Relaks",
    description: "Masaże, peeling całego ciała, zabiegi relaksacyjne. Chwila odprężenia tylko dla Ciebie.",
    image: "/images/snapinsta.jpg",
  },
]

export function Services() {
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
    <section id="uslugi" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#FFF5F8] overflow-hidden">
      {/* Large decorative number in background */}
      <div className="absolute left-0 top-20 -translate-x-1/3 pointer-events-none select-none">
        <span
          className="decorative-number text-[50vw] lg:text-[30vw] opacity-20"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          02
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-[#F8B4C8] mb-4">
            Nasze usługi
          </p>
          <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-6xl text-[#1A1A1A] leading-tight">
            Profesjonalna
            <br />
            <span
              className="italic text-[#F8B4C8]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              pielęgnacja
            </span>
          </h2>
          <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#F8B4C8] mt-6" />
          <p className="animate-on-scroll animate-fade-in-up delay-300 text-lg text-[#4A4A4A] mt-6 leading-relaxed">
            Odkryj pełną gamę profesjonalnych zabiegów kosmetycznych dostosowanych do Twoich potrzeb.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`animate-on-scroll animate-fade-in-up group relative bg-white rounded-sm overflow-hidden card-hover`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#1A1A1A] text-white text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-full">
                    Popularne
                  </span>
                </div>
              )}

              {/* Large Number */}
              <div className="absolute top-4 left-6">
                <span
                  className="text-7xl lg:text-8xl text-[#F8B4C8] opacity-40 leading-none"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative pt-20 pb-8 px-6">
                <h3 className="text-2xl lg:text-3xl text-[#1A1A1A] leading-tight">
                  {service.title}
                  <br />
                  <span
                    className="italic text-[#F8B4C8]"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {service.subtitle}
                  </span>
                </h3>

                <div className="w-8 h-[2px] bg-[#F8B4C8] my-4" />

                <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center gap-2 text-[#1A1A1A] group-hover:text-[#F8B4C8] transition-colors">
                  <span className="text-[13px] tracking-wide uppercase">Dowiedz się więcej</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              {/* Bottom Pink Line on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F8B4C8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll animate-fade-in-up delay-700 text-center mt-16">
          <button className="pill-button pill-button-primary text-[15px]">
            Zobacz pełną ofertę
          </button>
        </div>
      </div>
    </section>
  )
}
