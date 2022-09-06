import { createElement, HTMLProps, ReactNode } from 'react'
import { cssvars } from 'utils'
import styles from './Title.module.scss'

type Props = Omit<HTMLProps<HTMLElement>, 'size'> & {
  as?: string
  size?: 'xs' | 'sm' | 'sm-2x' | 'md' | 'md-2x' | 'lg' | 'lg-2x' | 'xl'
  color?: string
}

export default function Title({ as = 'h1', size = 'sm', color, style, children, className, ...rest }: Props) {
  return createElement(
    as,
    {
      style: { ...style, ...cssvars({ color }) },
      className: `${styles.root}  ${styles[size]} ${className}`,
      ...rest,
    },
    children
  )
}
