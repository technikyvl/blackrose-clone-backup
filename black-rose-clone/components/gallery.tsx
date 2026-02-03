"use client"

import { useEffect, useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react"

const galleryImages = [
  { id: 1, src: "/images/snapinsta.jpg", alt: "Manicure hybrydowy", category: "Manicure" },
  { id: 2, src: "/images/snapinsta.jpg", alt: "Stylizacja paznokci", category: "Manicure" },
  { id: 3, src: "/images/snapinsta.jpg", alt: "Henna brwi", category: "Oprawa oka" },
  { id: 4, src: "/images/snapinsta.jpg", alt: "Nail art", category: "Zdobienia" },
  { id: 5, src: "/images/snapinsta.jpg", alt: "Pedicure", category: "Pedicure" },
  { id: 6, src: "/images/snapinsta.jpg", alt: "French manicure", category: "Manicure" },
  { id: 7, src: "/images/snapinsta.jpg", alt: "Wnętrze salonu", category: "Salon" },
  { id: 8, src: "/images/snapinsta.jpg", alt: "Zabiegi na twarz", category: "Zabiegi" },
]

const categories = ["Wszystkie", "Manicure", "Pedicure", "Oprawa oka", "Zdobienia", "Zabiegi", "Salon"]

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState("Wszystkie")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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

  const filteredImages =
    activeCategory === "Wszystkie"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = ""
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section id="galeria" ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Large decorative text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 pointer-events-none select-none">
        <span
          className="decorative-number text-[40vw] lg:text-[25vw] opacity-10"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Gallery
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-[#F8B4C8] mb-4">
            Galeria
          </p>
          <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-6xl text-[#1A1A1A] leading-tight">
            Nasze
            <br />
            <span
              className="italic text-[#F8B4C8]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              realizacje
            </span>
          </h2>
          <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#F8B4C8] mt-6 mx-auto" />
        </div>

        {/* Category Filters */}
        <div className="animate-on-scroll animate-fade-in-up delay-300 flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-[13px] tracking-wide transition-all ${
                activeCategory === category
                  ? "bg-[#1A1A1A] text-white"
                  : "bg-[#FFF5F8] text-[#1A1A1A] hover:bg-[#F8B4C8]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`animate-on-scroll animate-fade-in-up group relative aspect-square overflow-hidden rounded-sm cursor-pointer`}
              style={{ animationDelay: `${(index % 8) * 50}ms` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A1A1A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <p className="text-white text-[14px] mb-2">{image.alt}</p>
                <span className="text-[#F8B4C8] text-[12px]">{image.category}</span>
              </div>
              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#F8B4C8] group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="animate-on-scroll animate-fade-in-up delay-500 text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 pill-button pill-button-outline text-[14px]"
          >
            <Instagram className="w-5 h-5" />
            <span>Zobacz więcej na Instagramie</span>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#1A1A1A]/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-[80vh] px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg">{filteredImages[selectedImage].alt}</p>
              <p className="text-[#F8B4C8] text-[14px] mt-1">
                {filteredImages[selectedImage].category}
              </p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-[14px]">
            {selectedImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
