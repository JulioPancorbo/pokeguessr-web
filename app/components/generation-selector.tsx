"use client"
import { cn } from "@/lib/utils"
import type { Generation } from "../types/pokemon"

interface GenerationSelectorProps {
  generations: Generation[]
  selectedGenerations: Generation[]
  onChange: (generations: Generation[]) => void
}

export function GenerationSelector({ generations, selectedGenerations, onChange }: GenerationSelectorProps) {
  const allSelected = selectedGenerations.length === generations.length

  const toggleGeneration = (generation: Generation) => {
    const isSelected = selectedGenerations.some((gen) => gen.id === generation.id)
    if (isSelected) {
      if (selectedGenerations.length === 1) return
      onChange(selectedGenerations.filter((gen) => gen.id !== generation.id))
    } else {
      onChange([...selectedGenerations, generation])
    }
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-2">
        {generations.map((gen) => {
          const isSelected = selectedGenerations.some((selected) => selected.id === gen.id)
          return (
            <button
              key={gen.id}
              onClick={() => toggleGeneration(gen)}
              className={cn(
                "h-9 w-full flex items-center justify-center font-bold text-sm transition-colors cursor-pointer",
                isSelected ? "gen-btn gen-btn-selected" : "gen-btn",
              )}
            >
              {gen.id}
            </button>
          )
        })}
      </div>
      <button
        onClick={() => onChange(allSelected ? [generations[0]] : generations)}
        className="gen-btn mt-3 w-full h-9 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
      >
        {allSelected ? "Deselect All" : "Select All"}
      </button>
    </div>
  )
}

