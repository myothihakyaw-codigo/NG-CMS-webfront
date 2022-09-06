import { createElement, HTMLProps, ReactNode } from 'react'
import { cssvars } from 'utils'
import styles from './Text.module.scss'

type Props = Omit<HTMLProps<HTMLElement>, 'size'> & {
  as?: string
  bold?: boolean
  size?: 'xs' | 'sm' | 'sm-2x' | 'md' | 'md-2x' | 'lg' | 'lg-2x' | 'xl' | 'xxl' | 'xxl-2x'
  color?: string
}

export default function Text({ as = 'p', size = 'sm', bold, color, style, children, className, ...rest }: Props) {
  return createElement(
    as,
    {
      style: { ...style, ...cssvars({ color }) },
      className: `${styles.root} ${bold && styles.bold} ${styles[size]} ${className}`,
      ...rest,
    },
    children
  )
}
