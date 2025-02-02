"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, Maximize2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  caseStudy: string
}

const projects: Project[] = [
  {
    id: "ai-chatbot",
    title: "AI-Powered Chatbot",
    description: "A React Native chatbot with voice and text interactions, leveraging OpenAI's GPT-3.",
    image: "/projects/ai-chatbot.svg",
    tags: ["React Native", "OpenAI", "Node.js"],
    liveUrl: "https://ai-chatbot-demo.com",
    githubUrl: "https://github.com/yourusername/ai-chatbot",
    caseStudy:
      "Developed an AI-powered chatbot using React Native and OpenAI's GPT-3. Implemented both voice and text interactions, allowing users to communicate naturally with the AI. Overcame challenges in speech-to-text and text-to-speech integration, and optimized performance for mobile devices.",
  },
  {
    id: "vape-wholesale",
    title: "Vape Wholesaler Platform",
    description: "An e-commerce platform for vape product wholesalers, built with Next.js and Stripe.",
    image: "/projects/vape-wholesale.svg",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    liveUrl: "https://vape-wholesale.com",
    caseStudy:
      "Created a B2B e-commerce platform for vape product wholesalers. Utilized Next.js for server-side rendering and Stripe for secure payment processing. Implemented a custom inventory management system and real-time order tracking. Increased client's sales by 150% within the first three months of launch.",
  },
  {
    id: "palate-voyage",
    title: "Palate Voyage",
    description: "An Instagram-based platform for sharing gut-friendly recipes and nutritional content.",
    image: "/projects/palate-voyage.svg",
    tags: ["Instagram API", "Content Strategy", "Nutrition"],
    liveUrl: "https://www.instagram.com/palatevoyage/",
    caseStudy:
      "Developed a content strategy and management system for Palate Voyage, an Instagram-based platform focused on gut-friendly recipes. Created a custom content calendar and automation tools to streamline posting. Grew the account to over 50,000 followers in six months through strategic partnerships and engaging content.",
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description: "A web app that generates images from text descriptions using AI.",
    image: "/projects/ai-image-generator.svg",
    tags: ["React", "OpenAI DALL-E", "Express.js"],
    liveUrl: "https://ai-image-gen-demo.com",
    githubUrl: "https://github.com/yourusername/ai-image-generator",
    caseStudy:
      "Built a web application that leverages OpenAI's DALL-E to generate images from text descriptions. Implemented a user-friendly interface with React and a backend API with Express.js. Overcame challenges in prompt engineering and image processing to produce high-quality, relevant images.",
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="mr-2"
                        onClick={() => {
                          setSelectedProject(project)
                          setIsDialogOpen(true)
                        }}
                      >
                        <Maximize2 className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] backdrop-blur-md bg-background/70">
                      <DialogHeader>
                        <DialogTitle className="text-foreground">{selectedProject?.title}</DialogTitle>
                        <DialogDescription className="text-foreground/80">
                          {selectedProject?.caseStudy}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="flex flex-wrap gap-2">
                          {selectedProject?.tags.map((tag) => (
                            <span key={tag} className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          {selectedProject?.liveUrl && (
                            <Button asChild className="bg-primary/80 hover:bg-primary">
                              <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {selectedProject?.githubUrl && (
                            <Button variant="outline" asChild className="bg-background/50 hover:bg-background/70">
                              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

