"use client"

import { useRef, useEffect, useState } from "react"
import { useSprings, animated } from "@react-spring/web"
import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log("BlurText error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <span>{this.props.text}</span>
    }

    return this.props.children
  }
}

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words", // 'words' or 'letters'
  direction = "top", // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeOutCubic",
  onAnimationComplete,
}) => {
  const elements = text ? (animateBy === "words" ? text.split(" ") : text.split("")) : []
  const [inView, setInView] = useState(false)
  const ref = useRef()
  const animatedCount = useRef(0)

  const defaultFrom =
    direction === "top"
      ? { filter: "blur(10px)", opacity: 0, transform: "translate3d(0,-50px,0)" }
      : { filter: "blur(10px)", opacity: 0, transform: "translate3d(0,50px,0)" }

  const defaultTo = [
    {
      filter: "blur(5px)",
      opacity: 0.5,
      transform: direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
    },
    { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of animationTo || defaultTo) {
              await next(step)
            }
            animatedCount.current += 1
            if (animatedCount.current === elements.length && onAnimationComplete) {
              onAnimationComplete()
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    })),
  )

  return (
    <ErrorBoundary text={text}>
      <p ref={ref} className={`blur-text ${className}`}>
        {springs.map((props, index) => (
          <animated.span
            key={index}
            style={{
              ...props,
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {elements[index] === " " ? "\u00A0" : elements[index]}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </animated.span>
        ))}
      </p>
    </ErrorBoundary>
  )
}

export default BlurText

