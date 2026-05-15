"use client"

import { useState } from "react"
import { Greeting } from "./components/Greeting"
import { BottomNav } from "./components/BottomNav"
import { VoiceButton } from "./components/VoiceButton"
import { ShortcutCards } from "./components/ShortcutCards"
import { TodaySummary } from "./components/TodaySummary"

export default function Home() {
  const [isRecording, setIsRecording] = useState(false)
  const [activeTab, setActiveTab] = useState ("home")
  
  return (
    <main className="max-w-md mx-auto min-h-screen px-5 pt-12 pb-24 bg-gradient-to-b from-sky-400 to-white">
      <Greeting name="Karolina" />
      <TodaySummary />
       <VoiceButton
        isRecording={isRecording}
        onToggleRecording={() => setIsRecording(!isRecording)}
      />
      <ShortcutCards />
      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
         />
    </main>
  )
}