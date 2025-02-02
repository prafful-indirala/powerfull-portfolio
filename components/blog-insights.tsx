"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type BlogPost = {
  id: string
  title: string
  description: string
  image: string
  date: string
  readTime: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: "ai-trends-2025",
    title: "AI Trends to Watch in 2025",
    description: "Explore the cutting-edge AI technologies that will shape our future in the coming years.",
    image: "/blog/ai-trends.svg",
    date: "May 15, 2025",
    readTime: "5 min read",
    category: "Artificial Intelligence",
  },
  {
    id: "react-best-practices",
    title: "10 React Best Practices for Clean Code",
    description: "Learn how to write maintainable and efficient React code with these essential best practices.",
    image: "/blog/react-best-practices.svg",
    date: "April 22, 2025",
    readTime: "8 min read",
    category: "Web Development",
  },
  {
    id: "startup-journey",
    title: "My Startup Journey: Lessons Learned",
    description: "Insights and experiences from my entrepreneurial journey in the tech industry.",
    image: "/blog/startup-journey.svg",
    date: "March 10, 2025",
    readTime: "10 min read",
    category: "Entrepreneurship",
  },
]

export default function BlogInsights() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog & Insights
        </motion.h2>
        <p className="text-center text-lg mb-12 text-muted-foreground">
          Dive into the latest trends, best practices, and personal experiences in tech and entrepreneurship.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredPost(post.id)}
              onHoverEnd={() => setHoveredPost(null)}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 ease-in-out"
                      style={{
                        transform: hoveredPost === post.id ? "scale(1.05)" : "scale(1)",
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <Badge className="mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    {post.date} • {post.readTime}
                  </div>
                  <Button variant="ghost" className="p-0">
                    Read More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg" variant="outline">
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

