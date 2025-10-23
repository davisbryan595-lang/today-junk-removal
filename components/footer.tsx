"use client"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
    ],
    services: [
      { label: "Junk Removal", href: "#services" },
      { label: "Furniture Removal", href: "#services" },
      { label: "Construction Cleanup", href: "#services" },
      { label: "Yard Waste", href: "#services" },
    ],
    contact: [
      { label: "204-698-4469", href: "tel:204-698-4469", icon: Phone },
      { label: "todayjunkremoval@gmail.com", href: "mailto:todayjunkremoval@gmail.com", icon: Mail },
      { label: "Winnipeg, MB", href: "#", icon: MapPin },
    ],
    areas: ["Winnipeg", "St. Vital", "St. Boniface", "Transcona", "St. James", "North End", "And surrounding areas"],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-primary">
                T
              </div>
              <span className="font-bold text-xl">Today</span>
            </div>
            <p className="text-white/70 mb-6">
              Professional junk removal services across Winnipeg and surrounding areas.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-accent transition-colors relative group">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-accent transition-colors relative group">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Areas */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact & Areas</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.contact.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors flex items-center gap-2"
                    >
                      <Icon size={16} />
                      <span>{link.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="text-sm text-white/60 space-y-1">
              {footerLinks.areas.map((area) => (
                <p key={area}>{area}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-white/60 text-sm">
          <p>&copy; {currentYear} Today Junk Removal. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
