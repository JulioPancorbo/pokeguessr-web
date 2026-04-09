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
          "fixed top-0 bottom-0 w-[280px] bg-blue-400 z-50 transition-transform duration-300 ease-in-out sm:hidden",
          side === "left" ? "left-0" : "right-0",
          isOpen ? "translate-x-0" : side === "left" ? "-translate-x-full" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-gray-100">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">{children}</div>
        </div>
      </div>
    </>
  )
}

