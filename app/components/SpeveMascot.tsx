import Image from "next/image"

export function SpeveMascot() {
  return (
    <div className="flex items-center gap-3">

      {/* Speech bubble */}
      <div className="relative bg-white rounded-3xl p-3 shadow-md border border-teal-100 max-w-[140px]">
        <p className="text-xs text-gray-600 leading-relaxed">
          I&apos;m Speve — your personal speedy assistant Steve. But you can call me Speve.
        </p>
        <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white" />
      </div>

      {/* Real Speve! */}
      <Image
        src="/speve.jpg"
        alt="Speve the robot assistant"
        width={130}
        height={130}
        className="rounded-full"
      />
    </div>
  )
}