"use client"

import { useEffect, useRef } from "react"
import { Clock, ArrowRight } from "lucide-react"

const pricingCategories = [
  {
    number: "01",
    category: "Paznokcie",
    subtitle: "u Rąk",
    services: [
      { name: "Manicure Hybrydowy Kolor", price: "110 zł", duration: "1g 45min", popular: true },
      { name: "Uzupełnianie Żelowe do 3 tyg.", price: "140 zł", duration: "2g" },
      { name: "Zdejmowanie + pielęgnacja", price: "85 zł", duration: "1g 15min" },
      { name: "SPA na dłonie", price: "25 zł", duration: "15min" },
    ],
  },
  {
    number: "02",
    category: "Oprawa",
    subtitle: "Oka",
    services: [
      { name: "Henna i regulacja brwi", price: "40 zł", duration: "20min", popular: true },
      { name: "Henna brwi i rzęs + regulacja", price: "50 zł", duration: "30min" },
      { name: "Henna pudrowa z geometrią", price: "110 zł", duration: "1g 10min" },
      { name: "Regulacja brwi", price: "30 zł", duration: "15min" },
    ],
  },
  {
    number: "03",
    category: "Zabiegi",
    subtitle: "Ciała",
    services: [
      { name: "Ultradźwięki - brzuch, talia", price: "80 zł", duration: "30min" },
      { name: "Ultradźwięki - uda, pośladki", price: "80 zł", duration: "30min" },
      { name: "Zabieg antycellulitowy", price: "70 zł", duration: "1g" },
      { name: "Peeling całego ciała", price: "80 zł", duration: "1g" },
    ],
  },
]

export function Pricing() {
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
    <section id="cennik" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#F8B4C8] overflow-hidden">
      {/* Large decorative number */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 pointer-events-none select-none">
        <span
          className="text-[50vw] lg:text-[35vw] text-white opacity-30 leading-none"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          04
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-white/80 mb-4">
            Cennik
          </p>
          <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-6xl text-[#1A1A1A] leading-tight">
            Przejrzyste
            <br />
            <span
              className="italic text-white"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              ceny
            </span>
          </h2>
          <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#1A1A1A] mt-6" />
          <p className="animate-on-scroll animate-fade-in-up delay-300 text-lg text-[#1A1A1A]/80 mt-6 leading-relaxed">
            Profesjonalne usługi kosmetyczne najwyższej jakości w przystępnych cenach.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingCategories.map((category, index) => (
            <div
              key={category.number}
              className={`animate-on-scroll animate-fade-in-up bg-white rounded-sm overflow-hidden card-hover`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Card Header */}
              <div className="relative p-6 pb-4">
                {/* Large Number */}
                <span
                  className="absolute top-4 right-6 text-6xl text-[#F8B4C8] opacity-40 leading-none"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {category.number}
                </span>

                <h3 className="relative text-2xl text-[#1A1A1A]">
                  {category.category}
                  <br />
                  <span
                    className="italic text-[#F8B4C8]"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {category.subtitle}
                  </span>
                </h3>
              </div>

              {/* Pink Line */}
              <div className="mx-6 h-[2px] bg-[#F8B4C8]" />

              {/* Services List */}
              <div className="p-6 space-y-4">
                {category.services.map((service, sIndex) => (
                  <div
                    key={sIndex}
                    className="group flex items-start justify-between gap-4 pb-4 border-b border-[#E5E5E5] last:border-0 last:pb-0"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-[15px] text-[#1A1A1A] font-medium leading-tight">
                          {service.name}
                        </h4>
                        {service.popular && (
                          <span className="bg-[#F8B4C8] text-[#1A1A1A] text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full">
                            Hit
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1.5 text-[#4A4A4A]">
                        <Clock className="w-3 h-3" />
                        <span className="text-[12px]">{service.duration}</span>
                      </div>
                    </div>
                    <span
                      className="text-xl text-[#F8B4C8] font-medium whitespace-nowrap"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll animate-fade-in-up delay-600 text-center mt-16">
          <button className="pill-button pill-button-primary flex items-center gap-2 mx-auto text-[15px]">
            <span>Zobacz pełny cennik</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
