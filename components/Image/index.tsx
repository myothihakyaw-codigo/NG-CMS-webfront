import Img, { ImageProps } from 'next/image'
import { useState } from 'react'
import styles from './Image.module.scss'

export default function Image({ size, children, className, ...rest }: ImageProps & { size?: number }) {
  const [isLoaded, setLoaded] = useState(false)

  return (
    <span className={`${styles.root} ${isLoaded && styles.loaded} ${className}`}>
      <Img quality={85} width={size} height={size} {...rest} onLoadingComplete={() => setLoaded(true)} />
      {children}
    </span>
  )
}
