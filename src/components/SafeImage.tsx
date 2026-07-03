import { useState, type CSSProperties, type ReactNode } from 'react'
import { assetUrl } from '../utils'

type SafeImageProps = {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
  fallback: ReactNode
}

export function SafeImage({ src, alt, className, style, fallback }: SafeImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <>{fallback}</>
  }

  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
