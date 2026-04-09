"use client"
import { cn } from "@/lib/utils"
import type { Generation } from "../types/pokemon"

interface GenerationSelectorProps {
  generations: Generation[]
  selectedGenerations: Generation[]
  onChange: (generations: Generation[]) => void
}

export function GenerationSelector({ generations, selectedGenerations, onChange }: GenerationSelectorProps) {
  const toggleGeneration = (generation: Generation) => {
    const isSelected = selectedGenerations.some((gen) => gen.id === generation.id)
    if (isSelected) {
      // Don't allow deselecting if it's the last selected generation
      if (selectedGenerations.length === 1) return
      onChange(selectedGenerations.filter((gen) => gen.id !== generation.id))
    } else {
      onChange([...selectedGenerations, generation])
    }
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 grid-rows-3 gap-1">
        {generations.map((gen) => {
          const isSelected = selectedGenerations.some((selected) => selected.id === gen.id)
          return (
            <button
              key={gen.id}
              onClick={() => toggleGeneration(gen)}
              className={cn(
                "h-8 flex items-center justify-center rounded-lg font-medium transition-colors text-sm",
                isSelected ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white hover:bg-gray-200 text-gray-700",
              )}
            >
              {gen.id}
            </button>
          )
        })}
      </div>
    </div>
  )
}

