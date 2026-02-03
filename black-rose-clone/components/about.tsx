"use client"

import { useEffect, useRef } from "react"
import { MapPin, Clock } from "lucide-react"

const stats = [
  { value: "500+", label: "Zadowolonych klientek" },
  { value: "5.0", label: "Średnia ocen" },
  { value: "8+", label: "Lat doświadczenia" },
]

export function About() {
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
    <section id="o-nas" ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Large decorative number */}
      <div className="absolute right-0 top-0 translate-x-1/3 pointer-events-none select-none">
        <span
          className="decorative-number text-[60vw] lg:text-[35vw] opacity-10"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          03
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image */}
          <div className="animate-on-scroll animate-slide-in-left relative order-2 lg:order-1">
            {/* Pink accent blocks */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#F8B4C8] opacity-20 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F8B4C8] -z-10" />

            <div className="relative image-reveal">
              <img
                src="/images/snapinsta.jpg"
                alt="Wnętrze salonu Black Rose"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>

            {/* Floating info card */}
            <div className="absolute -right-4 lg:-right-8 bottom-12 bg-white p-6 shadow-xl max-w-[260px]">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FFF5F8] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#F8B4C8]" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[#1A1A1A]">Lokalizacja</p>
                  <p className="text-[13px] text-[#4A4A4A] mt-1">ks. Barabasza 6, Czechowice-Dziedzice</p>
                </div>
              </div>
              <div className="w-full h-px bg-[#E5E5E5] my-4" />
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF5F8] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#F8B4C8]" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[#1A1A1A]">Godziny otwarcia</p>
                  <p className="text-[13px] text-[#4A4A4A] mt-1">Pn-Pt: 9:00 - 18:00</p>
                  <p className="text-[13px] text-[#4A4A4A]">Sb: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-[#F8B4C8] mb-4">
              O nas
            </p>

            <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-5xl xl:text-6xl text-[#1A1A1A] leading-tight">
              Salon
              <br />
              <span
                className="italic text-[#F8B4C8]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Black Rose
              </span>
            </h2>

            <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#F8B4C8] mt-6 mb-8" />

            <div className="animate-on-scroll animate-fade-in-up delay-300 space-y-6">
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Salon Kosmetyczny Black Rose to miejsce, gdzie profesjonalizm spotyka się z elegancją.
                Znajdujemy się w sercu Czechowic-Dziedzic i od lat dbamy o piękno i zadowolenie naszych klientek.
              </p>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Oferujemy szeroki wachlarz usług kosmetycznych wykonywanych przez wykwalifikowany personel
                w komfortowych warunkach. Nasze wnętrze zostało zaprojektowane z myślą o Twojej wygodzie i relaksie.
              </p>
            </div>

            {/* Stats with large pink numbers */}
            <div className="animate-on-scroll animate-fade-in-up delay-400 grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#E5E5E5]">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p
                    className="text-4xl lg:text-5xl xl:text-6xl text-[#F8B4C8] leading-none"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[12px] text-[#4A4A4A] mt-2 tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
