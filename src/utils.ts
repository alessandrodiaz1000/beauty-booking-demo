/** Base URL for public assets (GitHub Pages compatible). */
export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const WHATSAPP_URL = '#'
export const GOOGLE_MAPS_URL = '#'
export const GOOGLE_REVIEWS_URL = '#'

export const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const SERVICE_OPTIONS = [
  'Manicure',
  'Pedicure',
  'Semipermanente',
  'Ricostruzione gel',
  'Ceretta',
  'Mani + piedi',
] as const
