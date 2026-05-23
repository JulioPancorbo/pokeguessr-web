"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ADSENSE_CLIENT } from "../config/ads-config"

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

type AdSlotProps = {
  slot: string
  className?: string
  label?: string
  minHeight?: number
  format?: string
  responsive?: boolean
}

export function AdSlot({
  slot,
  className,
  label,
  minHeight = 0,
  format = "auto",
  responsive = false,
}: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasInitializedRef = useRef(false)

  useEffect(() => {
    if (hasInitializedRef.current) {
      return
    }

    if (typeof window === "undefined") {
      return
    }

    const container = containerRef.current
    const adElement = container?.querySelector("ins.adsbygoogle")
    let retryTimeoutId: number | null = null

    if (!container || !adElement) {
      return
    }

    const initializeAd = () => {
      if (hasInitializedRef.current) {
        return true
      }

      if (!window.adsbygoogle || typeof window.adsbygoogle.push !== "function") {
        return false
      }

      if (container.getBoundingClientRect().width <= 0) {
        return false
      }

      if (adElement.getAttribute("data-adsbygoogle-status")) {
        hasInitializedRef.current = true
        return true
      }

      try {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
        hasInitializedRef.current = true
        return true
      } catch (error) {
        console.error("Failed to initialize AdSense slot", error)
        return false
      }
    }

    const scheduleRetry = () => {
      if (hasInitializedRef.current || retryTimeoutId !== null) {
        return
      }

      retryTimeoutId = window.setTimeout(() => {
        retryTimeoutId = null
        if (!initializeAd()) {
          scheduleRetry()
        }
      }, 400)
    }

    if (initializeAd()) {
      return
    }

    const resizeObserver = new ResizeObserver(() => {
      if (initializeAd()) {
        resizeObserver.disconnect()
      } else {
        scheduleRetry()
      }
    })

    resizeObserver.observe(container)
    scheduleRetry()

    return () => {
      resizeObserver.disconnect()
      if (retryTimeoutId !== null) {
        window.clearTimeout(retryTimeoutId)
      }
    }
  }, [slot])

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      {label ? (
        <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
          {label}
        </p>
      ) : null}
      <div className="overflow-hidden rounded-lg bg-transparent">
        <ins
          className="adsbygoogle block"
          style={{ display: "block", minHeight }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    </div>
  )
}