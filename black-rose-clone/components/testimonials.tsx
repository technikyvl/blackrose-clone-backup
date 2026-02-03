"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Martyna K.",
    service: "Manicure Hybrydowy",
    rating: 5,
    date: "Styczeń 2026",
    text: "Fantastyczny salon! Pani Anna wykonała mi przepiękny manicure, który trzymał się idealnie przez 3 tygodnie. Polecam wszystkim!",
    image: "/images/snapinsta.jpg",
  },
  {
    id: 2,
    name: "Agnieszka W.",
    service: "Henna Pudrowa",
    rating: 5,
    date: "Grudzień 2025",
    text: "Wreszcie mam idealne brwi! Pani Kasia jest prawdziwą artystką. Efekt naturalny i piękny. Na pewno wrócę.",
    image: "/images/snapinsta.jpg",
  },
  {
    id: 3,
    name: "Paulina M.",
    service: "Zabiegi na Twarz",
    rating: 5,
    date: "Styczeń 2026",
    text: "Zabieg oczyszczający zrobił cuda z moją cerą. Profesjonalne podejście i bardzo miła atmosfera. Gorąco polecam!",
    image: "/images/snapinsta.jpg",
  },
  {
    id: 4,
    name: "Ewa S.",
    service: "Pedicure",
    rating: 5,
    date: "Listopad 2025",
    text: "Najlepszy pedicure jaki miałam! Dbają o każdy szczegół, a stópki wyglądają jak nowe. Będę regularną klientką.",
    image: "/images/snapinsta.jpg",
  },
  {
    id: 5,
    name: "Monika T.",
    service: "SPA & Relaks",
    rating: 5,
    date: "Grudzień 2025",
    text: "Cudowny relaks po ciężkim tygodniu. Masaż był niesamowity, a cały zabieg przeprowadzony bardzo profesjonalnie.",
    image: "/images/snapinsta.jpg",
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

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

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="opinie" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden">
      {/* Large decorative quote */}
      <div className="absolute left-10 top-20 pointer-events-none select-none">
        <Quote className="w-32 h-32 lg:w-48 lg:h-48 text-[#F8B4C8] opacity-10" />
      </div>

      {/* Large decorative number */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 pointer-events-none select-none">
        <span
          className="text-[40vw] lg:text-[25vw] text-white opacity-[0.02] leading-none"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          5.0
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-[#F8B4C8] mb-4">
            Opinie klientek
          </p>
          <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-6xl text-white leading-tight">
            Co mówią
            <br />
            <span
              className="italic text-[#F8B4C8]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              o nas
            </span>
          </h2>
          <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#F8B4C8] mt-6 mx-auto" />
        </div>

        {/* Rating Summary */}
        <div className="animate-on-scroll animate-fade-in-up delay-300 flex items-center justify-center gap-8 mb-16">
          <div className="text-center">
            <p
              className="text-6xl lg:text-7xl text-[#F8B4C8]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              5.0
            </p>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F8B4C8] text-[#F8B4C8]" />
              ))}
            </div>
            <p className="text-[13px] text-white/60 mt-2">326 opinii</p>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="animate-on-scroll animate-fade-in-up delay-400 relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div
            className={`bg-white/5 backdrop-blur-sm rounded-sm p-8 lg:p-12 transition-opacity duration-500 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Image */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-[#F8B4C8]">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Quote icon */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#F8B4C8] rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-[#1A1A1A]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F8B4C8] text-[#F8B4C8]" />
                  ))}
                </div>

                <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                  <h4 className="text-white font-medium">
                    {testimonials[currentIndex].name}
                  </h4>
                  <span className="hidden lg:block w-1 h-1 bg-[#F8B4C8] rounded-full" />
                  <span className="text-[#F8B4C8] text-[14px]">
                    {testimonials[currentIndex].service}
                  </span>
                  <span className="hidden lg:block w-1 h-1 bg-white/30 rounded-full" />
                  <span className="text-white/50 text-[13px]">
                    {testimonials[currentIndex].date}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#F8B4C8] hover:bg-[#F8B4C8]/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-[#F8B4C8]"
                      : "bg-white/30 hover:bg-[#F8B4C8]/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#F8B4C8] hover:bg-[#F8B4C8]/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="animate-on-scroll animate-fade-in-up delay-500 text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#F8B4C8] transition-colors text-[14px]"
          >
            <span>Zobacz wszystkie opinie na Google</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
