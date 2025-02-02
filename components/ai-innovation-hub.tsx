"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type AIProject = {
  id: string
  title: string
  description: string
  image: string
  details: string[]
}

const aiProjects: AIProject[] = [
  {
    id: "neural-network",
    title: "Advanced Neural Networks",
    description: "Developing cutting-edge neural network architectures for complex problem-solving.",
    image: "/ai-projects/neural-network.svg",
    details: [
      "Implemented state-of-the-art attention mechanisms",
      "Achieved 95% accuracy on benchmark datasets",
      "Reduced training time by 40% through optimization techniques",
    ],
  },
  {
    id: "nlp-chatbot",
    title: "NLP-Powered Chatbot",
    description: "Creating an intelligent chatbot using advanced Natural Language Processing techniques.",
    image: "/ai-projects/robot.svg",
    details: [
      "Integrated GPT-3 for human-like responses",
      "Implemented context-aware conversation handling",
      "Achieved a 30% increase in user engagement",
    ],
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Platform",
    description: "Building a robust platform for data-driven decision making and forecasting.",
    image: "/ai-projects/data-visualization.svg",
    details: [
      "Developed custom algorithms for time-series forecasting",
      "Integrated multiple data sources for comprehensive analysis",
      "Reduced forecast error by 25% compared to traditional methods",
    ],
  },
]

export default function AIInnovationHub() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <section id="ai-hub" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI & Innovation Hub
        </motion.h2>
        <p className="text-center text-lg mb-12 text-muted-foreground">
          Exploring the frontiers of Artificial Intelligence and driving innovation through cutting-edge projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button
                  variant="outline"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="w-full justify-between"
                  aria-expanded={expandedProject === project.id}
                  aria-controls={`details-${project.id}`}
                >
                  {expandedProject === project.id ? "Hide Details" : "Show Details"}
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                      expandedProject === project.id ? "rotate-180" : ""
                    }`}
                  />
                </Button>
                {expandedProject === project.id && (
                  <motion.ul
                    id={`details-${project.id}`}
                    className="mt-4 space-y-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.details.map((detail, index) => (
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
      </div>
    </section>
  )
}

