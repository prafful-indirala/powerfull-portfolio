// Simplified version for this example
import { useState } from "react"

export function useToast() {
  const [toasts, setToasts] = useState<{ title: string; description: string }[]>([])

  const toast = ({ title, description }: { title: string; description: string }) => {
    setToasts((prev) => [...prev, { title, description }])
    setTimeout(() => {
      setToasts((prev) => prev.slice(1))
    }, 3000)
  }

  return { toast, toasts }
}

