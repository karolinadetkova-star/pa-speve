"use client"

import { useState } from "react"
import { BottomNav } from "../components/BottomNav"

export default function NotesPage() {

  const [activeTab, setActiveTab] = useState ("notes")

  return (
    <main className="max-w-md mx-auto min-h-screen px-5 pt-12 pb-24 bg-gradient-to-b from-teal-50 to-white">
      <h1 className="text-2xl font-bold text-teal-600">
        My Notes
      </h1>
      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
         />
    </main>
  )
}
