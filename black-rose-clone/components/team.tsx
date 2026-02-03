"use client"

import { useEffect, useRef } from "react"
import { Instagram } from "lucide-react"

const teamMembers = [
  {
    name: "Anna",
    surname: "Kowalska",
    role: "Właścicielka & Stylistka",
    specialization: "Manicure, Pedicure",
    experience: "12 lat doświadczenia",
    image: "/images/snapinsta.jpg",
    instagram: "#",
    bio: "Pasjonatka stylizacji paznokci z wieloletnim doświadczeniem. Specjalizuje się w manicure hybrydowym i żelowym.",
  },
  {
    name: "Magdalena",
    surname: "Nowak",
    role: "Kosmetolog",
    specialization: "Zabiegi na twarz",
    experience: "8 lat doświadczenia",
    image: "/images/snapinsta.jpg",
    instagram: "#",
    bio: "Certyfikowana kosmetolog. Wykonuje zabiegi pielęgnacyjne i odmładzające na twarz.",
  },
  {
    name: "Katarzyna",
    surname: "Wiśniewska",
    role: "Specjalistka",
    specialization: "Oprawa oka, Henna",
    experience: "6 lat doświadczenia",
    image: "/images/snapinsta.jpg",
    instagram: "#",
    bio: "Ekspertka w dziedzinie oprawy oka. Tworzy idealne brwi dopasowane do kształtu twarzy.",
  },
  {
    name: "Paulina",
    surname: "Zielińska",
    role: "Stylistka",
    specialization: "Nail Art, Zdobienia",
    experience: "5 lat doświadczenia",
    image: "/images/snapinsta.jpg",
    instagram: "#",
    bio: "Artystka nail art. Tworzy unikalne zdobienia i wzory na paznokciach.",
  },
]

export function Team() {
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
    <section id="zespol" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#FFF5F8] overflow-hidden">
      {/* Large decorative number */}
      <div className="absolute right-0 top-20 translate-x-1/3 pointer-events-none select-none">
        <span
          className="decorative-number text-[50vw] lg:text-[30vw] opacity-20"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Team
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-[#F8B4C8] mb-4">
            Nasz zespół
          </p>
          <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-6xl text-[#1A1A1A] leading-tight">
            Poznaj nasze
            <br />
            <span
              className="italic text-[#F8B4C8]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              specjalistki
            </span>
          </h2>
          <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#F8B4C8] mt-6 mx-auto" />
          <p className="animate-on-scroll animate-fade-in-up delay-300 text-lg text-[#4A4A4A] mt-6 leading-relaxed">
            Nasz zespół to wykwalifikowane specjalistki z wieloletnim doświadczeniem,
            które z pasją podchodzą do swojej pracy.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`animate-on-scroll animate-fade-in-up group relative bg-white rounded-sm overflow-hidden card-hover`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} ${member.surname}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#1A1A1A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={member.instagram}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300"
                  >
                    <Instagram className="w-5 h-5 text-[#F8B4C8]" />
                  </a>
                </div>
                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-[#F8B4C8] text-[#1A1A1A] text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-full">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-[#1A1A1A]">
                  {member.name}{" "}
                  <span
                    className="italic text-[#F8B4C8]"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {member.surname}
                  </span>
                </h3>
                <p className="text-[13px] text-[#4A4A4A] mt-1">{member.role}</p>

                <div className="w-8 h-[2px] bg-[#F8B4C8] my-4" />

                <p className="text-[13px] text-[#4A4A4A] leading-relaxed">
                  {member.bio}
                </p>

                {/* Specialization Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {member.specialization.split(", ").map((spec, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-[#F8B4C8] border border-[#F8B4C8] px-2 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Pink Line on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F8B4C8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
