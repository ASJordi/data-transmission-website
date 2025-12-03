import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { AnalogDigitalSection } from "@/components/analog-digital-section"
import { SyncAsyncSection } from "@/components/sync-async-section"
import { ComparisonTable } from "@/components/comparison-table"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AnalogDigitalSection />
      <SyncAsyncSection />
      <ComparisonTable />
      <Footer />
    </main>
  )
}
