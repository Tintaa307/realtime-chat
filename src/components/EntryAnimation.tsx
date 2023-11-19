import React from "react"

type EntryAnimationProps = {
  setFinish: React.Dispatch<React.SetStateAction<boolean>>
}

const EntryAnimation = ({ setFinish }: EntryAnimationProps) => {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-[#2A0E8F] animate-circle-in">
      <h1 className="opacity-0 text-white font-bold text-4xl animate-appear animation-delay-2000">
        PILLWISE
        <span
          onAnimationEnd={() => setFinish(true)}
          className="opacity-0 animate-appear2 animation-delay-3000"
        >
          .
        </span>
      </h1>
    </main>
  )
}

export default EntryAnimation
