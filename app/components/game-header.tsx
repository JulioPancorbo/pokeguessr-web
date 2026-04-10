"use client"

import { Button } from "@/components/ui/button"
import { Settings, BarChart2 } from "lucide-react"

interface GameHeaderProps {
  onOpenSettings: () => void
  onOpenStats: () => void
}

export function GameHeader({ onOpenSettings, onOpenStats }: GameHeaderProps) {
  return (
    <div className="w-full top-0 left-0 right-0 flex justify-between items-center p-4 z-30 sm:hidden gap-2">
      <Button 
        size="icon" 
        onClick={onOpenSettings} 
        className="btn-retro"
        style={{
          background: "#3b7ec8",
          border: "2px solid #1e4d8b",
          boxShadow: "4px 4px 0px #0d0d1a",
        }}
      >
        <Settings className="stroke-white h-5 w-5" />
      </Button>
      <Button 
        size="icon" 
        onClick={onOpenStats} 
        className="btn-retro"
        style={{
          background: "#3b7ec8",
          border: "2px solid #1e4d8b",
          boxShadow: "4px 4px 0px #0d0d1a",
        }}
      >
        <BarChart2 className="stroke-white h-5 w-5" />
      </Button>
    </div>
  )
}

