import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Hand, Eye, Scissors, Droplet, Paintbrush } from "lucide-react"

const services = [
  {
    icon: Hand,
    title: "Manicure & Pedicure",
    description: "Profesjonalna stylizacja paznokci, manicure hybrydowy, żelowy i klasyczny",
    popular: true,
  },
  {
    icon: Eye,
    title: "Oprawa Oka",
    description: "Regulacja brwi, henna, henna pudrowa z geometrią, koloryzacja rzęs",
  },
  {
    icon: Droplet,
    title: "Zabiegi na Twarz",
    description: "Oczyszczanie manualne, peelingi, zabiegi przeciwstarzeniowe",
  },
  {
    icon: Scissors,
    title: "Depilacja",
    description: "Usuwanie owłosienia z różnych partii ciała metodą woskową",
  },
  {
    icon: Paintbrush,
    title: "Zabiegi Ciała",
    description: "Ultradźwięki, modelowanie sylwetki, zabiegi antycellulitowe",
  },
  {
    icon: Sparkles,
    title: "SPA & Relaks",
    description: "Masaże, peeling całego ciała, zabiegi relaksacyjne",
  },
]

export function Services() {
  return (
    <section id="uslugi" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance relative inline-block">
            Nasze Usługi
            <span className="absolute -top-2 -right-3 text-[#D4AF37] text-2xl">✨</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Odkryj pełną gamę profesjonalnych zabiegów kosmetycznych dostosowanych do Twoich potrzeb
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="relative hover:shadow-lg transition-shadow border-border/50">
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#D4AF37] text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                      Popularne
                    </span>
                  </div>
                )}
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center border border-[#D4AF37]/20">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
