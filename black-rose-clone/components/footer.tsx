import { Facebook, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Black Rose</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Salon Kosmetyczny w Czechowicach-Dziedzicach. Profesjonalna pielęgnacja i relaks.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Manicure & Pedicure</li>
              <li>Oprawa Oka</li>
              <li>Zabiegi na Twarz</li>
              <li>Zabiegi Ciała</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informacje</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>O nas</li>
              <li>Cennik</li>
              <li>Opinie</li>
              <li>Kontakt</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Śledź nas</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Black Rose Salon Kosmetyczny. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
