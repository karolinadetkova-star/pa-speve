import { FileText, Calendar, Lightbulb } from "lucide-react"

const shortcuts = [
  {
    id: "notes",
    label: "Notes",
    icon: FileText,
    count: 12,
    color: "bg-teal-50 border-teal-100 text-teal-600",
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: Calendar,
    count: 3,
    color: "bg-yellow-50 border-yellow-100 text-yellow-600",
  },
  {
    id: "projects",
    label: "Projects",
    icon: Lightbulb,
    count: 5,
    color: "bg-green-50 border-green-100 text-green-700",
  },
]

export function ShortcutCards() {
  return (
    <section className="mb-6">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Quick Access
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {shortcuts.map((shortcut) => (
          <div
            key={shortcut.id}
            className={`rounded-2xl border p-4 cursor-pointer hover:scale-105 transition-all duration-200 ${shortcut.color}`}
          >
            <shortcut.icon className="w-5 h-5 mb-2" />
            <p className="font-semibold text-sm">{shortcut.label}</p>
            <p className="text-xs opacity-70 mt-0.5">{shortcut.count} items</p>
          </div>
        ))}
      </div>
    </section>
  )
}