"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const skills = [
  "React Native",
  "AI Development",
  "Full-Stack Web",
  "Node.js",
  "Python",
  "OpenAI API",
  "UI/UX Design",
  "Entrepreneurship",
]

const journeyItems = [
  {
    icon: "/india-flag.svg",
    title: "Born in India",
    description: "Started coding at 15",
  },
  {
    icon: "/uk-flag.svg",
    title: "Masters in UK",
    description: "AI & Mobile Dev",
  },
  {
    icon: "/entrepreneur-icon.svg",
    title: "Entrepreneur",
    description: "Launched multiple ventures",
  },
]

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/405F0ECD-99CA-4CAE-B3E1-372DD9446DC5.JPG-abeVjknrrWlov8jUizhNxt0IXbq892.jpeg"
                alt="Professional portrait"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 300px, 400px"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Hi, I'm Prafful Indirala
            </h3>
            <p className="text-lg mb-6 text-muted-foreground">
              I'm a passionate full-stack developer and AI enthusiast with a knack for turning innovative ideas into
              reality. My journey has taken me from the vibrant tech scene in India to pursuing a master's degree in the
              UK, where I've honed my skills in React Native, AI development, and entrepreneurship.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              When I'm not coding, you can find me experimenting with AI, launching side ventures like my vape
              wholesaling business, or creating mouth-watering, gut-friendly recipes for my 'Palate Voyage' Instagram
              page.
            </p>
            <h4 className="text-xl font-semibold mb-4">My Expertise</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="relative overflow-hidden backdrop-blur-sm bg-white/10 dark:bg-white/5 text-primary px-4 py-2 rounded-xl text-sm font-medium border border-white/20 dark:border-white/10 shadow-[inset_0px_0px_4px_rgba(255,255,255,0.2)] hover:shadow-[inset_0px_0px_8px_rgba(255,255,255,0.3)] hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-12 text-center">My Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {journeyItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className="mb-4 bg-primary/10 p-6 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="w-12 h-12"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

