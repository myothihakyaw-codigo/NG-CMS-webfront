import { createElement, HTMLAttributes } from 'react'
import styles from './Skeleton.module.scss'

type Props = HTMLAttributes<HTMLElement> & {
  as?: string
  width?: number | string
  height?: number | string
  className?: string
}

export default function Skeleton({ as = 'div', style, width, height, className, ...rest }: Props) {
  return createElement(
    as,
    {
      style: { width, height, ...style },
      className: `${styles.root} ${className}`,
      ...rest,
    },
    ''
  )
}
