"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
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
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative Pink Line - Top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F8B4C8]" />

      {/* Large Decorative Number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
        <span
          className="decorative-number text-[40vw] lg:text-[35vw] opacity-30 animate-number-float"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          01
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Rating Badge */}
            <div
              className="animate-on-scroll animate-fade-in-up inline-flex items-center gap-3 bg-[#FFF5F8] px-5 py-2.5 rounded-full"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F8B4C8] text-[#F8B4C8]" />
                ))}
              </div>
              <span className="text-[14px] text-[#1A1A1A] font-medium">5.0</span>
              <span className="w-px h-4 bg-[#E5E5E5]" />
              <span className="text-[14px] text-[#4A4A4A]">326 opinii</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="animate-on-scroll animate-fade-in-up delay-100">
                <span className="block text-5xl lg:text-7xl xl:text-8xl font-light text-[#1A1A1A] tracking-tight leading-[0.95]">
                  Salon
                </span>
                <span className="block text-5xl lg:text-7xl xl:text-8xl font-light text-[#1A1A1A] tracking-tight leading-[0.95]">
                  Kosmetyczny
                </span>
                <span
                  className="block text-5xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] italic text-[#F8B4C8] mt-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Black Rose
                </span>
              </h1>
            </div>

            {/* Pink Accent Line */}
            <div className="animate-on-scroll animate-line-expand delay-200 w-24 h-[3px] bg-[#F8B4C8]" />

            {/* Description */}
            <p className="animate-on-scroll animate-fade-in-up delay-300 text-lg lg:text-xl text-[#4A4A4A] leading-relaxed max-w-lg">
              Odkryj prawdziwe piękno w sercu Czechowic-Dziedzic.
              <br />
              Profesjonalna pielęgnacja i relaks w eleganckim otoczeniu.
            </p>

            {/* CTA Buttons */}
            <div className="animate-on-scroll animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4">
              <button className="pill-button pill-button-primary flex items-center justify-center gap-2 text-[15px]">
                <span>Zarezerwuj wizytę</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="pill-button pill-button-outline text-[15px]">
                Zobacz usługi
              </button>
            </div>

            {/* Stats Row */}
            <div className="animate-on-scroll animate-fade-in-up delay-500 flex items-center gap-8 pt-6">
              <div>
                <p
                  className="text-5xl lg:text-6xl text-[#F8B4C8] leading-none"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  500+
                </p>
                <p className="text-[13px] text-[#4A4A4A] mt-2 tracking-wide uppercase">
                  Zadowolonych klientek
                </p>
              </div>
              <div className="w-px h-16 bg-[#E5E5E5]" />
              <div>
                <p
                  className="text-5xl lg:text-6xl text-[#F8B4C8] leading-none"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  8+
                </p>
                <p className="text-[13px] text-[#4A4A4A] mt-2 tracking-wide uppercase">
                  Lat doświadczenia
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-on-scroll animate-slide-in-right delay-200 relative lg:h-[650px]">
            {/* Pink decorative frame */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-l-[3px] border-t-[3px] border-[#F8B4C8]" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-[3px] border-b-[3px] border-[#F8B4C8]" />

            <div className="relative h-full image-reveal rounded-sm overflow-hidden shadow-2xl">
              <img
                src="/images/snapinsta.jpg"
                alt="Pięknie pomalowane paznokcie - Salon Kosmetyczny Black Rose"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating pill badge */}
            <div className="absolute -left-6 bottom-20 lg:-left-12 bg-white px-6 py-4 rounded-full shadow-lg">
              <p className="text-[13px] text-[#4A4A4A] tracking-wide">
                <span className="text-[#F8B4C8] font-medium">Rezerwacja online</span> dostępna 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E5E5E5]" />
    </section>
  )
}
