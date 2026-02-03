"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const transformations = [
  {
    id: 1,
    title: "Manicure Hybrydowy",
    subtitle: "French Ombre",
    before: "/images/snapinsta.jpg",
    after: "/images/snapinsta.jpg",
  },
  {
    id: 2,
    title: "Henna Pudrowa",
    subtitle: "z Geometrią",
    before: "/images/snapinsta.jpg",
    after: "/images/snapinsta.jpg",
  },
  {
    id: 3,
    title: "Stylizacja Żelowa",
    subtitle: "Baby Boomer",
    before: "/images/snapinsta.jpg",
    after: "/images/snapinsta.jpg",
  },
  {
    id: 4,
    title: "Zabieg na Twarz",
    subtitle: "Oczyszczanie",
    before: "/images/snapinsta.jpg",
    after: "/images/snapinsta.jpg",
  },
]

export function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(x, 5), 95))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(x, 5), 95))
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length)
    setSliderPosition(50)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
    setSliderPosition(50)
  }

  return (
    <section id="metamorfozy" ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Large decorative number */}
      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span
          className="decorative-number text-[60vw] lg:text-[35vw] opacity-10"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          B&A
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-[#F8B4C8] mb-4">
            Metamorfozy
          </p>
          <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-6xl text-[#1A1A1A] leading-tight">
            Przed
            <br />
            <span
              className="italic text-[#F8B4C8]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              & Po
            </span>
          </h2>
          <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#F8B4C8] mt-6" />
          <p className="animate-on-scroll animate-fade-in-up delay-300 text-lg text-[#4A4A4A] mt-6 leading-relaxed">
            Zobacz efekty naszych zabiegów. Przesuń suwak, aby zobaczyć transformację.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Slider */}
          <div className="animate-on-scroll animate-fade-in-up delay-400">
            <div
              className="relative aspect-[4/5] cursor-ew-resize select-none overflow-hidden rounded-sm"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Background) */}
              <div className="absolute inset-0">
                <img
                  src={transformations[activeIndex].after}
                  alt="Po zabiegu"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute top-4 right-4 bg-[#1A1A1A] text-white text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-full">
                  Po
                </div>
              </div>

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={transformations[activeIndex].before}
                  alt="Przed zabiegiem"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute top-4 left-4 bg-white text-[#1A1A1A] text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-full">
                  Przed
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <div className="flex items-center gap-1">
                    <ChevronLeft className="w-4 h-4 text-[#1A1A1A]" />
                    <ChevronRight className="w-4 h-4 text-[#1A1A1A]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#F8B4C8] hover:bg-[#FFF5F8] transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#1A1A1A]" />
              </button>

              <div className="flex items-center gap-2">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index)
                      setSliderPosition(50)
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-8 bg-[#F8B4C8]"
                        : "bg-[#E5E5E5] hover:bg-[#F8B4C8]/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#F8B4C8] hover:bg-[#FFF5F8] transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#1A1A1A]" />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="animate-on-scroll animate-slide-in-right delay-500">
            <div className="relative">
              {/* Large Number */}
              <span
                className="absolute -top-8 -left-4 text-[120px] lg:text-[180px] text-[#F8B4C8] opacity-20 leading-none pointer-events-none"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <h3 className="text-3xl lg:text-4xl text-[#1A1A1A] mb-2">
                  {transformations[activeIndex].title}
                </h3>
                <p
                  className="text-2xl lg:text-3xl italic text-[#F8B4C8]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {transformations[activeIndex].subtitle}
                </p>

                <div className="w-12 h-[2px] bg-[#F8B4C8] my-6" />

                <p className="text-[#4A4A4A] leading-relaxed mb-8">
                  Każdy zabieg wykonujemy z najwyższą starannością, dbając o każdy detal.
                  Nasze klientki wychodzą z salonu zadowolone i pewne siebie.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#FFF5F8] text-[#1A1A1A] text-[13px] rounded-full">
                    Profesjonalne produkty
                  </span>
                  <span className="px-4 py-2 bg-[#FFF5F8] text-[#1A1A1A] text-[13px] rounded-full">
                    Trwały efekt
                  </span>
                  <span className="px-4 py-2 bg-[#FFF5F8] text-[#1A1A1A] text-[13px] rounded-full">
                    Indywidualne podejście
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
