/** Base URL for public assets (GitHub Pages compatible). */
export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const WHATSAPP_URL = 'https://wa.me/393331234567?text=Ciao%2C%20vorrei%20informazioni%20su%20Be-Luce'

export const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
