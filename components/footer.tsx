import { Radio } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Radio className="h-5 w-5 text-primary" />
            <span className="font-semibold">DataTransmit</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Guía interactiva sobre tipos de transmisión de datos en redes de computadoras
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#analog-digital" className="hover:text-primary transition-colors">
              Analógica/Digital
            </a>
            <a href="#sync-async" className="hover:text-primary transition-colors">
              Síncrona/Asíncrona
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
