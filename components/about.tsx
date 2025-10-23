"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

interface StatCounter {
  value: number
  label: string
  suffix: string
}

const stats: StatCounter[] = [
  { value: 1000, label: "Projects Done", suffix: "+" },
  { value: 24, label: "Availability", suffix: "/7" },
  { value: 98, label: "Same-Day Service", suffix: "%" },
  { value: 100, label: "Eco-Friendly Disposal", suffix: "%" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image/Video placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden shadow-2xl">
              <img
                src="/junk-removal-team.png"
                alt="Today Junk Removal Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>

          {/* Right: Company mission */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Your Trusted Junk Removal Partner</h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              At Today Junk Removal, we believe that a clean space is a happy space. With over a decade of experience
              serving Winnipeg and surrounding areas, we've helped thousands of residents and businesses reclaim their
              spaces.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Our commitment to eco-friendly disposal, same-day service, and transparent pricing sets us apart. We
              handle everything from furniture and appliances to construction debris and yard waste.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-foreground">Fast & Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-foreground">Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center bg-white border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 rounded-xl"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-foreground/60 mt-4 font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
