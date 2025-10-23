"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/gallery-1.jpg",
    alt: "Junk removal before and after",
    category: "before-after",
  },
  {
    id: 2,
    src: "/gallery-2.jpg",
    alt: "Professional junk removal team",
    category: "team",
  },
  {
    id: 3,
    src: "/gallery-3.jpg",
    alt: "Truck loaded with junk",
    category: "truck",
  },
  {
    id: 4,
    src: "/gallery-4.jpg",
    alt: "Clean garage after removal",
    category: "before-after",
  },
  {
    id: 5,
    src: "/gallery-5.jpg",
    alt: "Furniture removal service",
    category: "furniture",
  },
  {
    id: 6,
    src: "/gallery-6.jpg",
    alt: "Construction debris cleanup",
    category: "construction",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (image: (typeof galleryImages)[0], index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    setSelectedImage(galleryImages[newIndex])
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(galleryImages[newIndex])
    setCurrentIndex(newIndex)
  }

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Our Work</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            See the transformations we've made for our satisfied customers
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              onClick={() => openLightbox(image, index)}
              className="relative overflow-hidden rounded-xl cursor-pointer group h-64 md:h-72"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-12 h-12 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>

            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-xl max-h-[80vh] object-contain"
            />

            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 text-white hover:text-accent transition-colors"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 text-white hover:text-accent transition-colors"
            >
              <ChevronRight size={40} />
            </button>

            <div className="text-center text-white mt-6">
              <p>
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
