import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { BeforeAfter } from "@/components/before-after"
import { About } from "@/components/about"
import { WhyUs } from "@/components/why-us"
import { Team } from "@/components/team"
import { Gallery } from "@/components/gallery"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <About />
      <WhyUs />
      <Team />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
