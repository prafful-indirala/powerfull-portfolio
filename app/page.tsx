"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import dynamic from "next/dynamic"
import AboutMe from "@/components/about-me"
import Portfolio from "@/components/portfolio"
import AIInnovationHub from "@/components/ai-innovation-hub"
import ServicesFreelancing from "@/components/services-freelancing"
import BlogInsights from "@/components/blog-insights"
import ContactMe from "@/components/contact-me"
import SplashCursor from "@/components/splash-cursor"
import BlurText from "@/components/blur-text"

const Avatar = dynamic(() => import("@/components/avatar"), { ssr: false })

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SplashCursor />
      <div className="min-h-screen flex flex-col items-center justify-center py-2">

        <BlurText
          text="Building the Future, One App at a Time"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl font-bold text-center mb-4"
        />



        <p className="text-2xl text-center mb-8">Full-Stack Developer | AI Enthusiast | Entrepreneur</p>
        <div className="w-64 h-64 mb-8">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Avatar />
          </Canvas>
        </div>
        <a href="#about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </a>
      </div>
      <AboutMe />
      <Portfolio />
      <AIInnovationHub />
      <ServicesFreelancing />
      <BlogInsights />
      <ContactMe />
    </div>
  )
}

