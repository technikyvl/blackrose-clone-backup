"use client"

import { useEffect, useRef } from "react"
import { MapPin, Navigation, Phone, Clock, Car, Train } from "lucide-react"

export function Location() {
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
    <section id="lokalizacja" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden">
      {/* Large decorative text */}
      <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 pointer-events-none select-none">
        <span
          className="text-[40vw] lg:text-[25vw] text-white opacity-[0.02] leading-none"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Map
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-[#F8B4C8] mb-4">
              Lokalizacja
            </p>
            <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
              Jak do nas
              <br />
              <span
                className="italic text-[#F8B4C8]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                trafić
              </span>
            </h2>
            <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#F8B4C8] mt-6" />

            {/* Address */}
            <div className="animate-on-scroll animate-fade-in-up delay-300 mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#F8B4C8]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Adres</p>
                  <p className="text-white/60 text-[15px]">ks. Barabasza 6</p>
                  <p className="text-white/60 text-[15px]">43-502 Czechowice-Dziedzice</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#F8B4C8]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Godziny otwarcia</p>
                  <p className="text-white/60 text-[15px]">Poniedziałek - Piątek: 9:00 - 18:00</p>
                  <p className="text-white/60 text-[15px]">Sobota: 9:00 - 14:00</p>
                  <p className="text-white/60 text-[15px]">Niedziela: Zamknięte</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#F8B4C8]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Telefon</p>
                  <a href="tel:+48XXXXXXXXX" className="text-white/60 text-[15px] hover:text-[#F8B4C8] transition-colors">
                    +48 XXX XXX XXX
                  </a>
                </div>
              </div>
            </div>

            {/* How to get here */}
            <div className="animate-on-scroll animate-fade-in-up delay-400 mt-10 pt-10 border-t border-white/10">
              <p className="text-white font-medium mb-6">Jak do nas dotrzeć</p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F8B4C8]/10 flex items-center justify-center flex-shrink-0">
                    <Car className="w-4 h-4 text-[#F8B4C8]" />
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-medium">Samochodem</p>
                    <p className="text-white/50 text-[13px]">
                      Parking dostępny przy ulicy. Dojazd z centrum około 5 minut.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F8B4C8]/10 flex items-center justify-center flex-shrink-0">
                    <Train className="w-4 h-4 text-[#F8B4C8]" />
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-medium">Komunikacją</p>
                    <p className="text-white/50 text-[13px]">
                      Przystanek autobusowy 200m od salonu. Linie: 1, 3, 5.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="animate-on-scroll animate-fade-in-up delay-500 mt-10">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 pill-button pill-button-secondary text-[14px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Otwórz w Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right - Map */}
          <div className="animate-on-scroll animate-slide-in-right delay-300 relative">
            {/* Pink decorative frame */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-r-[3px] border-t-[3px] border-[#F8B4C8]" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-[3px] border-b-[3px] border-[#F8B4C8]" />

            {/* Map Container */}
            <div className="relative bg-white/5 rounded-sm overflow-hidden aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
              {/* Placeholder for map - you can replace with actual Google Maps embed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#F8B4C8]/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-[#F8B4C8]" />
                  </div>
                  <p className="text-white/60 text-[14px] mb-4">
                    Interaktywna mapa
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F8B4C8] text-[14px] hover:underline"
                  >
                    Zobacz na Google Maps →
                  </a>
                </div>
              </div>

              {/* You can replace the above with an actual iframe: */}
              {/*
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              */}
            </div>

            {/* Floating info card */}
            <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-[280px] bg-white p-5 rounded-sm shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#F8B4C8] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <div>
                  <p className="text-[#1A1A1A] font-medium text-[14px]">Black Rose</p>
                  <p className="text-[#4A4A4A] text-[12px]">ks. Barabasza 6, Czechowice-Dziedzice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
