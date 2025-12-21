import { MapPin, Clock, Award, Users } from "lucide-react"

const stats = [
  { icon: Users, value: "500+", label: "Zadowolonych klientek" },
  { icon: Award, value: "5.0", label: "Średnia ocen" },
  { icon: Clock, value: "8+", label: "Lat doświadczenia" },
]

export function About() {
  return (
    <section id="o-nas" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">O Salonie Black Rose</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Salon Kosmetyczny Black Rose to miejsce, gdzie profesjonalizm spotyka się z elegancją. Znajdujemy się w
              sercu Czechowic-Dziedzic i od lat dbamy o piękno i zadowolenie naszych klientek.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Oferujemy szeroki wachlarz usług kosmetycznych wykonywanych przez wykwalifikowany personel w komfortowych
              warunkach. Nasze wnętrze zostało zaprojektowane z myślą o Twojej wygodzie i relaksie.
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Lokalizacja</p>
                  <p className="text-muted-foreground">ks. Barabasza 6, 43-502 Czechowice-Dziedzic</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Godziny otwarcia</p>
                  <p className="text-muted-foreground">Pn-Pt: 9:00 - 18:00 | Sb: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-secondary/50 rounded-2xl p-8 text-center border border-[#D4AF37]/20">
                  <Icon className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
                  <p className="text-4xl font-bold text-[#D4AF37] mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
