import { ReactNode, useRef } from 'react'
import type { Addon, InputBoxBaseProps } from '../types'
import styles from './InputBox.module.scss'

type Props = InputBoxBaseProps & {
  value: any
  label?: string
  prefix?: Addon
  postfix?: Addon
  children: ReactNode
  className?: string
  onClick?: Function
  onChange: Function
}

const Addon = ({
  empty,
  children,
  position,
  onChange,
}: {
  empty: boolean
  children: Addon
  position: 'start' | 'end'
  onChange: Function
}) => {
  return children ? (
    <i className={`${styles.addon} ${styles[position]}`}>
      {typeof children === 'function' ? children({ empty, onChange }) : children}
    </i>
  ) : null
}

const InputBox = ({
  label,
  value,
  state = '',
  variant = 'float',
  prefix,
  postfix,
  message,
  children,
  className,
  onClick,
  onChange,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const isEmpty = value === undefined || value === ''

  const handleClick = () => {
    const ele = ref.current
    const child = ele?.getElementsByTagName('input')[0] || ele?.getElementsByTagName('textarea')[0]
    child?.focus()
  }

  return (
    <section
      className={`${styles.root} ${isEmpty && styles.empty} ${styles[state]} ${styles[variant]} ${className}`}
      onClick={() => onClick && onClick()}
    >
      <Addon empty={isEmpty} onChange={onChange} position="start">
        {prefix}
      </Addon>
      <div ref={ref} className={styles.main} onClick={handleClick}>
        <label className="label">{message || label}</label>
        {children}
      </div>
      <Addon empty={isEmpty} onChange={onChange} position="end">
        {postfix}
      </Addon>
    </section>
  )
}

export default InputBox
