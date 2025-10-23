"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Basic",
    price: 99,
    description: "Perfect for small cleanups",
    features: ["1/4 truck capacity", "Minimal cleanup", "Same-day available", "Eco-friendly disposal"],
    recommended: false,
  },
  {
    name: "Standard",
    price: 179,
    description: "Most popular choice",
    features: [
      "1/2 truck capacity",
      "Sweep & organization",
      "Same-day available",
      "Eco-friendly disposal",
      "Free estimates",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    price: 249,
    description: "Complete solution",
    features: [
      "Full truck capacity",
      "Deep clean included",
      "Touch-up service",
      "Same-day available",
      "Free estimates",
      "Priority booking",
    ],
    recommended: false,
  },
]

export default function Pricing() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(pricingTiers.length).fill(false))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = containerRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest pricing for quality service.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              data-index={index}
              className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                tier.recommended
                  ? "border-accent bg-gradient-to-br from-accent/5 to-primary/5 shadow-xl shadow-accent/20 md:scale-105"
                  : "border-border bg-white hover:border-accent hover:shadow-lg hover:shadow-accent/10"
              } ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </div>
              )}

              <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
              <p className="text-foreground/60 mb-6">{tier.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-primary">${tier.price}</span>
                <span className="text-foreground/60 ml-2">+</span>
              </div>

              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full mb-8 font-semibold py-3 rounded-lg transition-all duration-300 ${
                  tier.recommended
                    ? "bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:shadow-accent/50"
                    : "border-2 border-primary text-primary hover:bg-primary/10"
                }`}
              >
                Book Now
              </Button>

              <div className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
