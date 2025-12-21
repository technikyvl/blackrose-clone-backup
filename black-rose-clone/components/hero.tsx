import { Button } from "@/components/ui/button"
import { Star, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-sm">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="font-semibold">5.0</span>
              <span className="text-muted-foreground">• 326 opinii</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
                Salon
                <br />
                Kosmetyczny
                <br />
                <span className="text-primary">Black Rose</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Odkryj prawdziwe piękno w sercu Czechowic-Dziedzic. Profesjonalna pielęgnacja i relaks w eleganckim
                otoczeniu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Zarezerwuj wizytę online
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent">
                Zobacz nasze usługi
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="bg-muted/50 rounded-2xl p-6 inline-block">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">
                  zadowolonych klientek
                  <br />w tym roku
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px]">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
              <img
                src="/images/paznokcie.jpg"
                alt="Pięknie pomalowane paznokcie - Salon Kosmetyczny Black Rose"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
