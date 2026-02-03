"use client"

import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-[0_1px_0_0_#F8B4C8]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img
              src="/logo-2.png"
              alt="Black Rose"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              style={{
                mixBlendMode: 'multiply',
                filter: 'contrast(1.2) brightness(1.1)'
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: "uslugi", label: "Usługi" },
              { id: "o-nas", label: "O nas" },
              { id: "zespol", label: "Zespół" },
              { id: "cennik", label: "Cennik" },
              { id: "kontakt", label: "Kontakt" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-[15px] tracking-wide text-[#1A1A1A] hover:text-[#1A1A1A] transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F8B4C8] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+48XXXXXXXXX"
              className="flex items-center gap-2 text-[15px] text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Zadzwoń</span>
            </a>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="pill-button pill-button-primary text-[14px]"
            >
              Zarezerwuj
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1A1A1A] hover:bg-[#FFF5F8] rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#F8B4C8] transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {[
            { id: "uslugi", label: "Usługi" },
            { id: "o-nas", label: "O nas" },
            { id: "zespol", label: "Zespół" },
            { id: "cennik", label: "Cennik" },
            { id: "kontakt", label: "Kontakt" },
          ].map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left py-3 px-4 text-[17px] text-[#1A1A1A] hover:bg-[#FFF5F8] rounded-lg transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}

          <div className="mt-4 pt-4 border-t border-[#E5E5E5] space-y-3">
            <a
              href="tel:+48XXXXXXXXX"
              className="flex items-center gap-3 py-3 px-4 text-[#4A4A4A] hover:bg-[#FFF5F8] rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Zadzwoń do nas</span>
            </a>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="w-full pill-button pill-button-secondary text-center"
            >
              Zarezerwuj wizytę
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
