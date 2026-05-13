"use client"

import { useEffect, useState } from "react"
import { SpeveMascot } from "./SpeveMascot"

export function Greeting() {
  const [greeting, setGreeting] = useState("Good morning")

  useEffect(() => {
    const hour = new Date().getHours()
    if ( hour >= 5 && hour < 12) {
      setGreeting("Good morning")
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good afternoon")
    } else if (hour >= 17 && hour < 21) {
        setGreeting("Good evening")
    } else {
      setGreeting("Good night")
    }
  }, [])

  return (
    <div className="mb-6 pt-4">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-teal-600 w-32">
                {greeting}, Karolina 👋
            </h1>
                <SpeveMascot />
        </div>
    </div>
  )
}