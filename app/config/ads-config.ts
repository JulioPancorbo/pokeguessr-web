export const ADSENSE_CLIENT = "ca-pub-8234501822186977"

// Sustituye estos valores por los slot IDs reales de tus dos anuncios laterales.
export const DESKTOP_SIDE_ADS = {
  left: {
    slot: "3552752298",
    label: "Advertisement",
  },
  right: {
    slot: "3195179556",
    label: "Advertisement",
  },
} as const

export const DESKTOP_SIDE_AD_MIN_HEIGHT = 600
export const DESKTOP_SIDE_AD_VIEWPORT_CLASS = "min-[1400px]:block"
export const DESKTOP_SIDE_AD_WIDTH_CLASS = "w-[160px]"
export const DESKTOP_SIDE_AD_LAYOUT_CLASS = "min-[1400px]:mx-auto min-[1400px]:flex min-[1400px]:max-w-[1520px] min-[1400px]:items-start min-[1400px]:gap-6 min-[1400px]:px-6"