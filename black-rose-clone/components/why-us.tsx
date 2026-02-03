"use client"

import { useEffect, useRef } from "react"
import { Shield, Heart, Clock, Award, Sparkles, Users } from "lucide-react"

const features = [
  {
    icon: Award,
    number: "01",
    title: "Doświadczenie",
    description: "Ponad 8 lat doświadczenia w branży kosmetycznej i setki zadowolonych klientek.",
  },
  {
    icon: Shield,
    number: "02",
    title: "Bezpieczeństwo",
    description: "Sterylne narzędzia, certyfikowane produkty i najwyższe standardy higieny.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Jakość",
    description: "Używamy tylko profesjonalnych produktów renomowanych marek kosmetycznych.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Indywidualne podejście",
    description: "Każdą klientkę traktujemy wyjątkowo, dopasowując usługi do jej potrzeb.",
  },
  {
    icon: Clock,
    number: "05",
    title: "Punktualność",
    description: "Szanujemy Twój czas. Wizyty rozpoczynamy punktualnie, bez zbędnego czekania.",
  },
  {
    icon: Users,
    number: "06",
    title: "Profesjonalizm",
    description: "Regularnie szkolimy się i śledzimy najnowsze trendy w kosmetyce.",
  },
]

export function WhyUs() {
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
    <section id="dlaczego-my" ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Large decorative number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 pointer-events-none select-none">
        <span
          className="decorative-number text-[50vw] lg:text-[35vw] opacity-10"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Why
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-[#F8B4C8] mb-4">
            Dlaczego my
          </p>
          <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-6xl text-[#1A1A1A] leading-tight">
            Dlaczego
            <br />
            <span
              className="italic text-[#F8B4C8]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Black Rose
            </span>
          </h2>
          <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#F8B4C8] mt-6 mx-auto" />
          <p className="animate-on-scroll animate-fade-in-up delay-300 text-lg text-[#4A4A4A] mt-6 leading-relaxed">
            Zaufanie naszych klientek to dla nas największa nagroda.
            Oto co nas wyróżnia.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`animate-on-scroll animate-fade-in-up group relative`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Large Number Background */}
                <span
                  className="absolute -top-4 -left-2 text-8xl text-[#F8B4C8] opacity-10 leading-none pointer-events-none"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {feature.number}
                </span>

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#FFF5F8] flex items-center justify-center mb-6 group-hover:bg-[#F8B4C8] transition-colors">
                    <Icon className="w-6 h-6 text-[#F8B4C8] group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl text-[#1A1A1A] mb-3">{feature.title}</h3>
                  <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Underline accent */}
                  <div className="w-0 h-[2px] bg-[#F8B4C8] mt-6 group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Banner */}
        <div className="animate-on-scroll animate-fade-in-up delay-700 mt-20 bg-[#F8B4C8] rounded-sm p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p
                className="text-4xl lg:text-5xl text-[#1A1A1A] mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                500+
              </p>
              <p className="text-[13px] text-[#1A1A1A]/70 uppercase tracking-wide">
                Zadowolonych klientek
              </p>
            </div>
            <div>
              <p
                className="text-4xl lg:text-5xl text-[#1A1A1A] mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                8+
              </p>
              <p className="text-[13px] text-[#1A1A1A]/70 uppercase tracking-wide">
                Lat doświadczenia
              </p>
            </div>
            <div>
              <p
                className="text-4xl lg:text-5xl text-[#1A1A1A] mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                50+
              </p>
              <p className="text-[13px] text-[#1A1A1A]/70 uppercase tracking-wide">
                Rodzajów usług
              </p>
            </div>
            <div>
              <p
                className="text-4xl lg:text-5xl text-[#1A1A1A] mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                5.0
              </p>
              <p className="text-[13px] text-[#1A1A1A]/70 uppercase tracking-wide">
                Średnia ocen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
