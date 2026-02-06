import { useEffect, useRef } from 'react'

const FallingFlowers = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Flower particles
    const flowers = []
    const flowerCount = 15

    class Flower {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = -20
        this.size = Math.random() * 8 + 4
        this.speed = Math.random() * 0.5 + 0.3
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.opacity = Math.random() * 0.4 + 0.3
        this.petalCount = 5
      }

      update() {
        this.y += this.speed
        this.x += Math.sin(this.y * 0.01) * 0.3
        this.rotation += this.rotationSpeed

        if (this.y > canvas.height + 20) {
          this.reset()
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.globalAlpha = this.opacity

        // Draw flower petals (simple petal shape)
        const petalColors = ['#f0a855', '#e9b35c', '#d99a3d', '#f4c285']
        const color = petalColors[Math.floor(Math.random() * petalColors.length)]

        for (let i = 0; i < this.petalCount; i++) {
          const angle = (Math.PI * 2 / this.petalCount) * i
          ctx.beginPath()
          ctx.fillStyle = color
          ctx.ellipse(
            Math.cos(angle) * this.size * 0.6,
            Math.sin(angle) * this.size * 0.6,
            this.size * 0.4,
            this.size * 0.6,
            angle,
            0,
            Math.PI * 2
          )
          ctx.fill()
        }

        // Center
        ctx.beginPath()
        ctx.fillStyle = '#d17a2a'
        ctx.arc(0, 0, this.size * 0.2, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }
    }

    // Initialize flowers
    for (let i = 0; i < flowerCount; i++) {
      const flower = new Flower()
      flower.y = Math.random() * canvas.height
      flowers.push(flower)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      flowers.forEach(flower => {
        flower.update()
        flower.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}

export default FallingFlowers
