"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Gift, Percent, Calendar } from "lucide-react"

const offers = [
  {
    icon: Gift,
    tag: "Nowość",
    title: "Pakiet",
    titleAccent: "Narzeczona",
    description: "Manicure + pedicure + zabieg na twarz. Idealne przygotowanie przed ślubem.",
    originalPrice: "280 zł",
    price: "220 zł",
    discount: "-21%",
    validUntil: "Oferta stała",
  },
  {
    icon: Percent,
    tag: "-20%",
    title: "Pierwsza",
    titleAccent: "wizyta",
    description: "20% zniżki na pierwszą wizytę w naszym salonie. Dla nowych klientek.",
    originalPrice: null,
    price: "-20%",
    discount: null,
    validUntil: "Oferta stała",
  },
  {
    icon: Calendar,
    tag: "Luty 2026",
    title: "Walentynki",
    titleAccent: "dla Dwojga",
    description: "Zarezerwuj wizytę we dwie - manicure dla Ciebie i przyjaciółki ze zniżką.",
    originalPrice: "220 zł",
    price: "180 zł",
    discount: "-18%",
    validUntil: "Do 28 lutego",
  },
]

export function SpecialOffers() {
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
    <section id="promocje" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#F8B4C8] overflow-hidden">
      {/* Large decorative text */}
      <div className="absolute left-0 bottom-0 -translate-x-1/4 translate-y-1/4 pointer-events-none select-none">
        <span
          className="text-[50vw] lg:text-[30vw] text-white opacity-30 leading-none"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Sale
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-white/80 mb-4">
            Promocje
          </p>
          <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-6xl text-[#1A1A1A] leading-tight">
            Oferty
            <br />
            <span
              className="italic text-white"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              specjalne
            </span>
          </h2>
          <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#1A1A1A] mt-6" />
          <p className="animate-on-scroll animate-fade-in-up delay-300 text-lg text-[#1A1A1A]/80 mt-6 leading-relaxed">
            Skorzystaj z naszych promocji i zaoszczędź na ulubionych zabiegach.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon
            return (
              <div
                key={index}
                className={`animate-on-scroll animate-fade-in-up group relative bg-white rounded-sm overflow-hidden card-hover`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="bg-[#1A1A1A] text-white text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-full">
                    {offer.tag}
                  </span>
                </div>

                <div className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#FFF5F8] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#F8B4C8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl text-[#1A1A1A] mb-2">
                    {offer.title}
                    <br />
                    <span
                      className="italic text-[#F8B4C8]"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {offer.titleAccent}
                    </span>
                  </h3>

                  <div className="w-8 h-[2px] bg-[#F8B4C8] my-4" />

                  {/* Description */}
                  <p className="text-[14px] text-[#4A4A4A] leading-relaxed mb-6">
                    {offer.description}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span
                      className="text-3xl text-[#F8B4C8]"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {offer.price}
                    </span>
                    {offer.originalPrice && (
                      <span className="text-[14px] text-[#4A4A4A] line-through">
                        {offer.originalPrice}
                      </span>
                    )}
                    {offer.discount && (
                      <span className="text-[12px] text-[#F8B4C8] font-medium">
                        {offer.discount}
                      </span>
                    )}
                  </div>

                  {/* Valid until */}
                  <p className="text-[12px] text-[#4A4A4A] mb-6">
                    {offer.validUntil}
                  </p>

                  {/* CTA */}
                  <button className="w-full pill-button pill-button-primary flex items-center justify-center gap-2 text-[14px]">
                    <span>Zarezerwuj</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Pink Line on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F8B4C8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            )
          })}
        </div>

        {/* Newsletter/Voucher hint */}
        <div className="animate-on-scroll animate-fade-in-up delay-600 mt-16 bg-white rounded-sm p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-xl text-[#1A1A1A] mb-2">
              Voucher prezentowy
            </h3>
            <p className="text-[14px] text-[#4A4A4A]">
              Podaruj bliskiej osobie voucher na zabiegi w naszym salonie.
            </p>
          </div>
          <button className="pill-button pill-button-outline whitespace-nowrap text-[14px]">
            Kup voucher
          </button>
        </div>
      </div>
    </section>
  )
}
