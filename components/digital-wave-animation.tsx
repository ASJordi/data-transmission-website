"use client"

import { useEffect, useRef } from "react"

export function DigitalWaveAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 600
    canvas.height = 150

    let animationId: number
    let offset = 0

    const bitPattern = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1]
    const bitWidth = 50

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1
      for (let y = 0; y <= canvas.height; y += 30) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // High/Low labels
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)"
      ctx.font = "10px sans-serif"
      ctx.fillText("1 (Alto)", canvas.width - 50, 45)
      ctx.fillText("0 (Bajo)", canvas.width - 50, 115)

      // Digital wave
      ctx.beginPath()
      ctx.strokeStyle = "#4ade80"
      ctx.lineWidth = 3
      ctx.shadowBlur = 10
      ctx.shadowColor = "#4ade80"

      const highY = 40
      const lowY = 110
      const startOffset = Math.floor(offset / bitWidth) % bitPattern.length

      let prevY = bitPattern[startOffset] ? highY : lowY
      ctx.moveTo(0, prevY)

      for (let i = 0; i < Math.ceil(canvas.width / bitWidth) + 1; i++) {
        const bitIndex = (startOffset + i) % bitPattern.length
        const currentY = bitPattern[bitIndex] ? highY : lowY
        const x = i * bitWidth - (offset % bitWidth)

        if (currentY !== prevY) {
          ctx.lineTo(x, prevY)
          ctx.lineTo(x, currentY)
        }
        ctx.lineTo(x + bitWidth, currentY)
        prevY = currentY
      }

      ctx.stroke()
      ctx.shadowBlur = 0

      // Labels
      ctx.fillStyle = "#4ade80"
      ctx.font = "12px sans-serif"
      ctx.fillText("Señal Digital (discreta)", 10, 20)

      // Bit values
      ctx.fillStyle = "rgba(74, 222, 128, 0.6)"
      ctx.font = "14px monospace"
      for (let i = 0; i < Math.ceil(canvas.width / bitWidth) + 1; i++) {
        const bitIndex = (startOffset + i) % bitPattern.length
        const x = i * bitWidth - (offset % bitWidth) + bitWidth / 2 - 5
        if (x > 0 && x < canvas.width - 20) {
          ctx.fillText(bitPattern[bitIndex].toString(), x, 80)
        }
      }

      offset += 1
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return <canvas ref={canvasRef} className="w-full max-w-[600px] h-auto" />
}
