import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const pricingCategories = [
  {
    category: "Paznokcie u Rąk",
    services: [
      { name: "Manicure Hybrydowy Kolor", price: "110 zł", duration: "1g 45min", popular: true },
      { name: "Uzupełnianie Żelowe do 3 tygodni", price: "140 zł", duration: "2g" },
      { name: "Zdejmowanie stylizacji + pielęgnacja", price: "85 zł", duration: "1g 15min" },
      { name: "SPA na dłonie", price: "25 zł", duration: "15min" },
    ],
  },
  {
    category: "Oprawa Oka",
    services: [
      { name: "Henna i regulacja brwi", price: "40 zł", duration: "20min", popular: true },
      { name: "Henna brwi i rzęs + regulacja", price: "50 zł", duration: "30min" },
      { name: "Henna pudrowa z geometrią", price: "110 zł", duration: "1g 10min" },
      { name: "Regulacja brwi", price: "30 zł", duration: "15min" },
    ],
  },
  {
    category: "Zabiegi Ciała",
    services: [
      { name: "Ultradźwięki - brzuch, talia, boczki", price: "80 zł", duration: "30min" },
      { name: "Ultradźwięki - uda, pośladki", price: "80 zł", duration: "30min" },
      { name: "Zabieg antycellulitowy", price: "70 zł", duration: "1g" },
      { name: "Peeling całego ciała", price: "80 zł", duration: "1g" },
    ],
  },
]

export function Pricing() {
  return (
    <section id="cennik" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance relative inline-block">
            Cennik Usług
            <span className="absolute -top-2 -right-3 text-[#D4AF37] text-2xl">✨</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Przejrzyste ceny za profesjonalne usługi kosmetyczne najwyższej jakości
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingCategories.map((category, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.services.map((service, sIndex) => (
                  <div key={sIndex} className="space-y-2 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-semibold text-sm leading-tight flex-1">
                        {service.name}
                        {service.popular && (
                          <span className="ml-2 text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
                            Popularne
                          </span>
                        )}
                      </h4>
                      <span className="font-bold text-[#D4AF37] whitespace-nowrap">{service.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{service.duration}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Zobacz pełny cennik
          </Button>
        </div>
      </div>
    </section>
  )
}
