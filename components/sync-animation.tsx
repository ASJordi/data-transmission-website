"use client"

import { useEffect, useRef } from "react"

export function SyncAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 600
    canvas.height = 220

    let animationId: number
    let frame = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Title
      ctx.fillStyle = "#38bdf8"
      ctx.font = "12px sans-serif"
      ctx.fillText("Transmisión Síncrona - Reloj Compartido", 10, 20)

      // Clock signal
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
      ctx.font = "10px sans-serif"
      ctx.fillText("RELOJ", 10, 55)

      ctx.beginPath()
      ctx.strokeStyle = "#fbbf24"
      ctx.lineWidth = 2
      const clockPeriod = 40
      for (let x = 60; x < canvas.width - 20; x++) {
        const phase = ((x - 60 + frame) % clockPeriod) / clockPeriod
        const y = phase < 0.5 ? 45 : 65
        if (x === 60) ctx.moveTo(x, y)
        else {
          const prevPhase = ((x - 61 + frame) % clockPeriod) / clockPeriod
          if (prevPhase < 0.5 !== phase < 0.5) {
            ctx.lineTo(x, prevPhase < 0.5 ? 45 : 65)
          }
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Data signal
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
      ctx.fillText("DATOS", 10, 115)

      const dataPattern = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1]
      ctx.beginPath()
      ctx.strokeStyle = "#38bdf8"
      ctx.lineWidth = 2

      let prevY = 105
      for (let i = 0; i < dataPattern.length; i++) {
        const x = 60 + i * clockPeriod - (frame % clockPeriod)
        if (x < 60 || x > canvas.width - 20) continue

        const y = dataPattern[i] ? 95 : 125
        if (i === 0 || x === 60) {
          ctx.moveTo(x, y)
        } else {
          if (prevY !== y) {
            ctx.lineTo(x, prevY)
            ctx.lineTo(x, y)
          }
        }
        ctx.lineTo(x + clockPeriod, y)
        prevY = y
      }
      ctx.stroke()

      // Sync markers
      ctx.fillStyle = "rgba(251, 191, 36, 0.3)"
      for (let x = 60; x < canvas.width - 20; x += clockPeriod) {
        const adjustedX = x - (frame % clockPeriod)
        if (adjustedX >= 60 && adjustedX <= canvas.width - 20) {
          ctx.fillRect(adjustedX - 1, 40, 2, 100)
        }
      }

      // Sender and Receiver
      ctx.fillStyle = "#1e293b"
      ctx.strokeStyle = "#38bdf8"
      ctx.lineWidth = 2

      // Sender
      ctx.fillRect(10, 160, 80, 40)
      ctx.strokeRect(10, 160, 80, 40)
      ctx.fillStyle = "#38bdf8"
      ctx.font = "11px sans-serif"
      ctx.fillText("EMISOR", 25, 185)

      // Receiver
      ctx.fillStyle = "#1e293b"
      ctx.fillRect(canvas.width - 90, 160, 80, 40)
      ctx.strokeRect(canvas.width - 90, 160, 80, 40)
      ctx.fillStyle = "#38bdf8"
      ctx.fillText("RECEPTOR", canvas.width - 82, 185)

      // Data flow arrow
      const arrowX = 100 + ((frame * 3) % (canvas.width - 210))
      ctx.beginPath()
      ctx.strokeStyle = "#38bdf8"
      ctx.lineWidth = 2
      ctx.moveTo(90, 180)
      ctx.lineTo(canvas.width - 90, 180)
      ctx.stroke()

      // Moving packet
      ctx.fillStyle = "#38bdf8"
      ctx.beginPath()
      ctx.arc(arrowX, 180, 6, 0, Math.PI * 2)
      ctx.fill()

      frame++
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return <canvas ref={canvasRef} className="w-full max-w-[600px] h-auto" />
}
