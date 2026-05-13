import { CalendarDays, Clock } from "lucide-react"

const events = [
  { id: 1, title: "Team standup", time: "9:00 AM", color: "bg-teal-400" },
  { id: 2, title: "Design review", time: "11:30 AM", color: "bg-yellow-400" },
  { id: 3, title: "Yoga class", time: "6:00 PM", color: "bg-green-400" },
]

export function TodaySummary() {
  return (
    <section className="mb-6 bg-white rounded-2xl p-4 shadow-sm border border-teal-50">
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays className="w-5 h-5 text-teal-500" />
        <h2 className="font-semibold text-gray-700">Today's Schedule</h2>
      </div>
      <div className="space-y-2">
        {events.map((event) => (
          <div key={event.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-teal-50 transition-colors cursor-pointer">
            <div className={`w-2 h-2 rounded-full ${event.color}`} />
            <p className="flex-1 text-sm font-medium text-gray-700">{event.title}</p>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>{event.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}