"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Trash2, Sofa, Hammer, Leaf, Home, Zap } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Trash2,
    title: "Junk Removal",
    description: "General junk removal for any type of unwanted items from your home or business.",
    image: "/gallery-1.jpg",
  },
  {
    icon: Sofa,
    title: "Furniture & Appliance Removal",
    description: "Safe and efficient removal of large furniture pieces and old appliances.",
    image: "/gallery-2.jpg",
  },
  {
    icon: Hammer,
    title: "Construction Debris Cleanup",
    description: "Professional cleanup and removal of construction waste and debris.",
    image: "/gallery-3.jpg",
  },
  {
    icon: Leaf,
    title: "Yard Waste Removal",
    description: "Seasonal yard waste, branches, and landscaping debris removal.",
    image: "/gallery-4.jpg",
  },
  {
    icon: Home,
    title: "Garage & Basement Cleanouts",
    description: "Complete cleanout services for garages, basements, and storage areas.",
    image: "/gallery-5.jpg",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    description: "Emergency junk removal available with our fast same-day service option.",
    image: "/gallery-6.jpg",
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false))
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
    <section id="services" className="py-20 sm:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive junk removal solutions tailored to your needs
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                data-index={index}
                className={`p-0 bg-slate-800 border border-border rounded-xl transition-all duration-500 hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2 group cursor-pointer ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="service-image-wrapper w-full h-48 relative overflow-hidden rounded-t-xl">
                  <Image
                    src={service.image}
                    alt={`${service.title} image`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={false}
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-accent/10 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
