import { createElement, HTMLProps, useEffect, useRef, useState } from 'react'
import styles from './ViewInto.module.scss'

type Props = HTMLProps<HTMLElement> & {}

export default function ViewInto({ as = 'div', className, children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const child = ref.current
    if (child) {
      const main = document.getElementsByTagName('main')[0]
      main.addEventListener('scroll', () => {
        const scrollTop = main.scrollTop
        console.log(child.offsetTop)
        setShow(main.scrollTop > child.clientTop + child.offsetHeight)
      })
    }
  }, [])

  return createElement(
    as,
    {
      ref,
      className: `${className}`,
      ...rest,
    },
    children
  )
}
