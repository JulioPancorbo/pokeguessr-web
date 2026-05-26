import type { ReactNode } from "react"
import { AdSlot } from "./ad-slot"
import {
  DESKTOP_SIDE_AD_LAYOUT_CLASS,
  DESKTOP_SIDE_ADS,
  DESKTOP_SIDE_AD_MIN_HEIGHT,
  DESKTOP_SIDE_AD_VIEWPORT_CLASS,
  DESKTOP_SIDE_AD_WIDTH_CLASS,
} from "../config/ads-config"

type DesktopAdsShellProps = {
  children: ReactNode
}

const railClass = `hidden shrink-0 self-start ${DESKTOP_SIDE_AD_VIEWPORT_CLASS} ${DESKTOP_SIDE_AD_WIDTH_CLASS} sticky top-6`

export function DesktopAdsShell({ children }: DesktopAdsShellProps) {
  return (
    <div className="min-h-screen primary">
      <div className={DESKTOP_SIDE_AD_LAYOUT_CLASS}>
        <aside className={railClass} aria-label="Left advertisement rail">
        <AdSlot
          slot={DESKTOP_SIDE_ADS.left.slot}
          label={DESKTOP_SIDE_ADS.left.label}
          minHeight={DESKTOP_SIDE_AD_MIN_HEIGHT}
          responsive
        />
        </aside>

        <div className="min-w-0 flex-1">{children}</div>

        <aside className={railClass} aria-label="Right advertisement rail">
        <AdSlot
          slot={DESKTOP_SIDE_ADS.right.slot}
          label={DESKTOP_SIDE_ADS.right.label}
          minHeight={DESKTOP_SIDE_AD_MIN_HEIGHT}
          responsive
        />
        </aside>
      </div>
    </div>
  )
}