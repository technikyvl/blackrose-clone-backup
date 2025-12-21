import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+48 XXX XXX XXX",
    link: "tel:+48XXXXXXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    content: "kontakt@blackrose.pl",
    link: "mailto:kontakt@blackrose.pl",
  },
  {
    icon: MapPin,
    title: "Adres",
    content: "ks. Barabasza 6, 43-502 Czechowice-Dziedzice",
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Godziny otwarcia",
    content: "Pn-Pt: 9:00 - 18:00 | Sb: 9:00 - 14:00",
  },
]

export function Contact() {
  return (
    <section id="kontakt" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance relative inline-block">
            Skontaktuj się z nami
            <span className="absolute -top-2 -right-3 text-[#D4AF37] text-2xl">✨</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Zarezerwuj wizytę telefonicznie lub online. Chętnie odpowiemy na wszystkie pytania
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow border-[#D4AF37]/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto border border-[#D4AF37]/30">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-semibold">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors block"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center space-y-6 border border-[#D4AF37]/20">
          <h3 className="text-3xl font-bold relative inline-block">
            Gotowa na transformację?
            <span className="absolute -top-1 -right-2 text-[#D4AF37]">✨</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zarezerwuj wizytę online i doświadcz profesjonalnej obsługi w Black Rose
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
            Zarezerwuj wizytę teraz
          </Button>
        </div>
      </div>
    </section>
  )
}
