"use client"

import { useEffect, useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Jak mogę zarezerwować wizytę?",
    answer:
      "Wizytę można zarezerwować telefonicznie, przez nasz formularz online na stronie lub poprzez portal Booksy. Zalecamy rezerwację z wyprzedzeniem, szczególnie w weekendy.",
  },
  {
    question: "Czy mogę odwołać lub przełożyć wizytę?",
    answer:
      "Tak, prosimy o odwołanie lub przełożenie wizyty minimum 24 godziny przed planowanym terminem. Można to zrobić telefonicznie lub przez system rezerwacji online.",
  },
  {
    question: "Jak długo utrzymuje się manicure hybrydowy?",
    answer:
      "Przy prawidłowej pielęgnacji manicure hybrydowy utrzymuje się od 2 do 4 tygodni. Czas trwania zależy od indywidualnych cech paznokci oraz stylu życia.",
  },
  {
    question: "Czy oferujecie usługi dla osób z alergiami?",
    answer:
      "Tak, dysponujemy produktami hipoalergicznymi. Prosimy o poinformowanie nas o ewentualnych alergiach podczas rezerwacji, abyśmy mogli odpowiednio się przygotować.",
  },
  {
    question: "Jakie formy płatności akceptujecie?",
    answer:
      "Akceptujemy płatności gotówką, kartą płatniczą oraz BLIK. Dla stałych klientek oferujemy również możliwość zakupu voucherów prezentowych.",
  },
  {
    question: "Czy mogę przyjść z dzieckiem?",
    answer:
      "Ze względu na charakter usług i bezpieczeństwo, prosimy o nieprzynoszenie małych dzieci na zabiegi. W wyjątkowych sytuacjach prosimy o wcześniejszy kontakt.",
  },
  {
    question: "Czy oferujecie zabiegi dla mężczyzn?",
    answer:
      "Tak, oferujemy manicure i pedicure klasyczny dla mężczyzn, a także wybrane zabiegi pielęgnacyjne. Zapraszamy!",
  },
  {
    question: "Jak przygotować się do zabiegu na twarz?",
    answer:
      "Zalecamy przyjście bez makijażu lub z lekkim makijażem. Przed zabiegiem wykonamy demakijaż. Na 24h przed zabiegiem unikaj peelingu i silnego słońca.",
  },
]

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
    <section id="faq" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#FFF5F8] overflow-hidden">
      {/* Large decorative text */}
      <div className="absolute left-0 top-20 -translate-x-1/3 pointer-events-none select-none">
        <span
          className="decorative-number text-[50vw] lg:text-[30vw] opacity-20"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          FAQ
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Header */}
          <div>
            <p className="animate-on-scroll animate-fade-in-up text-[13px] tracking-[0.2em] uppercase text-[#F8B4C8] mb-4">
              FAQ
            </p>
            <h2 className="animate-on-scroll animate-fade-in-up delay-100 text-4xl lg:text-5xl xl:text-6xl text-[#1A1A1A] leading-tight">
              Najczęściej
              <br />
              zadawane
              <br />
              <span
                className="italic text-[#F8B4C8]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                pytania
              </span>
            </h2>
            <div className="animate-on-scroll animate-line-expand delay-200 w-16 h-[2px] bg-[#F8B4C8] mt-6" />
            <p className="animate-on-scroll animate-fade-in-up delay-300 text-lg text-[#4A4A4A] mt-6 leading-relaxed">
              Znajdziesz tutaj odpowiedzi na najczęściej zadawane pytania.
              Jeśli nie znajdziesz odpowiedzi, skontaktuj się z nami.
            </p>

            {/* Contact hint */}
            <div className="animate-on-scroll animate-fade-in-up delay-400 mt-8 p-6 bg-white rounded-sm">
              <p className="text-[#1A1A1A] font-medium mb-2">Masz inne pytanie?</p>
              <p className="text-[14px] text-[#4A4A4A] mb-4">
                Skontaktuj się z nami telefonicznie lub mailowo.
              </p>
              <a
                href="#kontakt"
                className="inline-flex text-[#F8B4C8] text-[14px] hover:text-[#1A1A1A] transition-colors"
              >
                Przejdź do kontaktu →
              </a>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="animate-on-scroll animate-fade-in-up delay-300 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-sm overflow-hidden transition-shadow ${
                  openIndex === index ? "shadow-lg" : "shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className="text-2xl text-[#F8B4C8] opacity-40"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-[#1A1A1A] font-medium pr-4">
                      {faq.question}
                    </span>
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index
                        ? "bg-[#F8B4C8] text-[#1A1A1A]"
                        : "bg-[#FFF5F8] text-[#F8B4C8] group-hover:bg-[#F8B4C8] group-hover:text-[#1A1A1A]"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 pl-[4.5rem]">
                    <p className="text-[14px] text-[#4A4A4A] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line when open */}
                <div
                  className={`h-[2px] bg-[#F8B4C8] transition-transform duration-300 origin-left ${
                    openIndex === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
