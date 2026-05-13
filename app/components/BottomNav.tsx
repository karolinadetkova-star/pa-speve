"use client"

import { Home, FileText, Calendar, Lightbulb } from "lucide-react"

interface BottomNavProps {
    activeTab: string
    onTabChange: (tab: string) => void
}

const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "notes", label:"Notes", icon: FileText },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "projects", label: "Projects", icon: Lightbulb },
]

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-teal-100 px-6 py-3 max-w-md mx-auto left-1/2 -translate-x-1/2">
            <div className="max-w-md mx-auto flex justify-between">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onTabChange(item.id)}
                        className={`flex flex-col items-center gap-1 transition-all duration-200 ${
                            activeTab === item.id 
                                ? "text-teal-600" 
                                : "text-gray-500"
                            }`}
                    >
                        <item.icon className={'w-6 h-6 ' + (activeTab === item.id ? 'stroke-[2.5px]' : '')} />
                        <span className="text-xs">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    )
}