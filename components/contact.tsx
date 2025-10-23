"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    junkType: "",
    message: "",
    sameDayService: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitted(true)
    setIsLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        junkType: "",
        message: "",
        sameDayService: false,
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Get Your Free Quote</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Contact us today for a free estimate. We're available 24/7 to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <Card className="p-6 bg-white border border-border rounded-xl hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:204-698-4469" className="text-accent hover:text-primary transition-colors">
                      204-698-4469
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border border-border rounded-xl hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:todayjunkremoval@gmail.com"
                      className="text-accent hover:text-primary transition-colors"
                    >
                      todayjunkremoval@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border border-border rounded-xl hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Service Areas</h3>
                    <p className="text-foreground/60 text-sm">
                      Winnipeg, St. Vital, St. Boniface, Transcona, St. James, North End & surrounding areas
                    </p>
                  </div>
                </div>
              </Card>

              {/* Embedded Map Placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                  <p className="text-foreground/50">Winnipeg, MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <Card className="p-8 bg-white border border-border rounded-xl flex flex-col items-center justify-center min-h-96">
                <CheckCircle className="w-16 h-16 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-foreground/60 text-center">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </Card>
            ) : (
              <Card className="p-8 bg-white border border-border rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                        placeholder="204-XXX-XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                      placeholder="Your address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Type of Junk</label>
                    <select
                      name="junkType"
                      value={formData.junkType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                    >
                      <option value="">Select a category</option>
                      <option value="furniture">Furniture & Appliances</option>
                      <option value="construction">Construction Debris</option>
                      <option value="yard">Yard Waste</option>
                      <option value="garage">Garage/Basement Cleanout</option>
                      <option value="general">General Junk</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background resize-none"
                      placeholder="Tell us more about your junk removal needs..."
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="sameDayService"
                      checked={formData.sameDayService}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-border cursor-pointer"
                    />
                    <span className="text-sm text-foreground">Request same-day service</span>
                  </label>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? "Sending..." : "Get Free Quote"}
                  </Button>
                </form>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
