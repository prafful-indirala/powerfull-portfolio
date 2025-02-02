"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type Service = {
  id: string
  title: string
  description: string
  image: string
  details: string[]
}

const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom web applications tailored to your business needs.",
    image: "/services/web-development.svg",
    details: [
      "Responsive design for all devices",
      "Frontend development with React and Next.js",
      "Backend development with Node.js and Express",
      "Database integration (SQL and NoSQL)",
      "API development and integration",
    ],
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    image: "/services/mobile-app.svg",
    details: [
      "React Native for cross-platform development",
      "Native iOS development with Swift",
      "Native Android development with Kotlin",
      "App Store and Google Play deployment",
      "Ongoing maintenance and support",
    ],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Enhance your applications with cutting-edge AI capabilities.",
    image: "/services/ai-integration.svg",
    details: [
      "Natural Language Processing (NLP) integration",
      "Machine Learning model development and deployment",
      "Computer Vision solutions",
      "Chatbot and virtual assistant development",
      "AI-powered analytics and insights",
    ],
  },
]

export default function ServicesFreelancing() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services & Freelancing
        </motion.h2>
        <p className="text-center text-lg mb-12 text-muted-foreground">
          Elevate your digital presence with custom solutions tailored to your unique needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full justify-between"
                  aria-expanded={expandedService === service.id}
                  aria-controls={`details-${service.id}`}
                >
                  {expandedService === service.id ? "Hide Details" : "Show Details"}
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                      expandedService === service.id ? "rotate-180" : ""
                    }`}
                  />
                </Button>
                {expandedService === service.id && (
                  <motion.ul
                    id={`details-${service.id}`}
                    className="mt-4 space-y-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        • {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Ready to start your project?</h3>
          <p className="text-muted-foreground mb-6">
            Let's collaborate to bring your ideas to life. Contact me for a free consultation and quote.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

