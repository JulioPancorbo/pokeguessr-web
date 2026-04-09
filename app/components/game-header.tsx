"use client"

import { Button } from "@/components/ui/button"
import { Settings, BarChart2 } from "lucide-react"

interface GameHeaderProps {
  onOpenSettings: () => void
  onOpenStats: () => void
}

export function GameHeader({ onOpenSettings, onOpenStats }: GameHeaderProps) {
  return (
    <div className="w-full top-0 left-0 right-0 flex justify-between items-center p-4 z-30 sm:hidden">
      <Button variant="ghost" size="icon" onClick={onOpenSettings} className="bg-blue-400 hover:bg-white/20">
        <Settings className="stroke-white h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" onClick={onOpenStats} className="bg-blue-400 hover:bg-white/20">
        <BarChart2 className="stroke-white h-5 w-5" />
      </Button>
    </div>
  )
}

