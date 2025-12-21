"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/logo-2.png" 
                alt="Black Rose Salon Kosmetyczny" 
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("uslugi")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection("o-nas")}
              className="text-foreground hover:text-primary transition-colors"
            >
              O Nas
            </button>
            <button
              onClick={() => scrollToSection("cennik")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Cennik
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Zarezerwuj wizytę
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("uslugi")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection("o-nas")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                O Nas
              </button>
              <button
                onClick={() => scrollToSection("cennik")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Cennik
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Kontakt
              </button>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" size="sm" className="justify-start bg-transparent">
                  <Phone className="w-4 h-4 mr-2" />
                  Zadzwoń
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Zarezerwuj wizytę
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
