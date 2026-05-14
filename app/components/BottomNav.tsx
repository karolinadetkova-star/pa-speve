"use client"

import { Home, FileText, Calendar, Lightbulb } from "lucide-react"
import Link from "next/link"

interface BottomNavProps {
    activeTab: string
    onTabChange: (tab: string) => void
}

const navItems = [
    { id: "home", label: "Home", icon: Home, href: "/" },
    { id: "notes", label:"Notes", icon: FileText, href: "/notes" },
    { id: "calendar", label: "Calendar", icon: Calendar, href: "/calendar" },
    { id: "projects", label: "Projects", icon: Lightbulb, href: "/projects" },
]

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
    return (
         <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-white border-t border-teal-100">
            <nav className="w-full max-w-md px-6 py-3">
                <div className="flex justify-between">
                    {navItems.map((item) => (
                    <Link href={item.href} key={item.id}>
                        <button
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
                    </Link>
                ))}
                </div>
            </nav>
        </div>
    )
}