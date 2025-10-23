"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "Today Junk Removal made my garage cleanout so easy! They were professional, efficient, and the pricing was exactly what they quoted. Highly recommend!",
    rating: 5,
    image: "/testimonial-1.jpg",
  },
  {
    name: "Mike Chen",
    role: "Business Owner",
    content:
      "We needed our warehouse cleared quickly. The team showed up on time, worked hard, and left everything spotless. Best service in Winnipeg!",
    rating: 5,
    image: "/testimonial-2.jpg",
  },
  {
    name: "Jennifer Martinez",
    role: "Property Manager",
    content:
      "Reliable, professional, and eco-conscious. They handle all our property cleanouts and we trust them completely. Five stars every time!",
    rating: 5,
    image: "/testimonial-3.jpg",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay])

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">What Our Customers Say</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've trusted us with their junk removal needs
          </p>
        </div>

        {/* Carousel */}
        <div className="relative" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 md:p-12 bg-slate-800 border border-border rounded-2xl max-w-2xl mx-auto">
                    <div className="flex items-start gap-4 mb-6">
                      <Quote className="w-8 h-8 text-accent flex-shrink-0" />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>

                    <p className="text-lg text-foreground/70 mb-8 leading-relaxed italic">"{testimonial.content}"</p>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-foreground/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoPlay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
