"use clien"

import { Mic, MicOff } from "lucide-react" 


interface VoiceButtonProps {
  isRecording: boolean
  onToggleRecording: () => void
}

export function VoiceButton({ isRecording, onToggleRecording }: VoiceButtonProps) {
  return (
    <div className="flex flex-col items-center my-8">
      <button
        onClick={onToggleRecording}
        className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isRecording
            ? "bg-teal-600 scale-110"
            : "bg-teal-500 hover:scale-105"
        }`}
        aria-label={isRecording ? "Stop recording" : "Talk to Speve"}
      >
        {isRecording ? (
          <MicOff className="w-8 h-8 text-white" />
        ) : (
          <Mic className="w-8 h-8 text-white" />
        )}
      </button>
      <p className="mt-3 text-sm text-teal-600 font-medium">
        {isRecording ? "Speve is listening..." : "Talk to Speve"}
      </p>
    </div>
  )
}