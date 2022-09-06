import Spinner from 'components/Spinner'
import Link from 'next/link'
import { ButtonHTMLAttributes, createElement, ReactNode, Ref } from 'react'
import { ElementState } from 'types'
import { cssvars } from 'utils'
import styles from './Button.module.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  $ref?: Ref<HTMLButtonElement>
  size?: false | '' | 'sm' | 'xs'
  href?: string
  icon?: ReactNode
  color?: string
  label?: ReactNode
  state?: ElementState
  inline?: boolean
  variant?: 'text' | 'primary' | 'secondary' | 'transparent'
}

const Root = ({ href, children }: { href?: string; children: ReactNode }) => {
  return !!href ? <Link href={href}>{children}</Link> : <>{children}</>
}

const Button = ({
  $ref,
  icon,
  href,
  size,
  color,
  label = '',
  state = '',
  inline = true,
  variant = 'primary',
  className,
  onClick,
  ...rest
}: Props) => {
  const handleClick = (e: any) => state === '' && onClick && onClick(e)

  return (
    <Root href={href}>
      {createElement(
        href ? 'a' : 'button',
        {
          ref: $ref,
          type: 'button',
          style: cssvars({ color }),
          disabled: state === 'disable',
          className: `${styles.root} ${styles[variant]} ${styles[size || '']} ${styles[state || '']} 
                      ${inline && styles.inline} ${className}`,
          onClick: handleClick,
          ...rest,
        },
        state === 'loading' ? (
          <Spinner color="currentColor" />
        ) : (
          <>
            {icon}
            {!!label && <span className={styles.label}>{label}</span>}
          </>
        )
      )}
    </Root>
  )
}

export default Button
