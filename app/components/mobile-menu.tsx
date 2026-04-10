"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface MobileMenuProps {
  side: "left" | "right"
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function MobileMenu({ side, isOpen, onClose, children }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 sm:hidden" onClick={onClose} />}

      {/* Menu */}
      <div
        className={cn(
          "fixed top-0 bottom-0 w-[280px] z-50 transition-transform duration-300 ease-in-out sm:hidden",
          side === "left" ? "left-0" : "right-0",
          isOpen ? "translate-x-0" : side === "left" ? "-translate-x-full" : "translate-x-full",
        )}
        style={{
          background: "linear-gradient(135deg, #2a3a5a 0%, #1a2a4a 100%)",
          border: side === "left" ? "3px solid rgba(255,222,0,0.5) 0 0" : "3px solid rgba(255,222,0,0.5) 0 0",
          borderRight: side === "right" ? "3px solid rgba(255,222,0,0.5)" : "none",
          borderLeft: side === "left" ? "3px solid rgba(255,222,0,0.5)" : "none",
          boxShadow: side === "left" ? "6px 0 12px rgba(0,0,0,0.5)" : "-6px 0 12px rgba(0,0,0,0.5)",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <Button 
              size="icon" 
              onClick={onClose} 
              className="btn-retro"
              style={{
                background: "#e63946",
                border: "2px solid #a71c2a",
                boxShadow: "3px 3px 0px #0d0d1a",
              }}
            >
              <X className="h-5 w-5 stroke-white" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4" style={{ color: "#ffde00", fontFamily: "var(--font-press-start), monospace" }}>{children}</div>
        </div>
      </div>
    </>
  )
}

