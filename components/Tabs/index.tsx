import * as $Tabs from '@radix-ui/react-tabs'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { cssvars } from 'utils'
import styles from './Tabs.module.scss'

type Props = {
  items: { label: string; component?: ReactNode }[]
  children?: (props: { label: string }) => ReactNode
  classNames?: { root?: string; list?: string; content?: string; trigger?: string }
  defaultValue?: string
}

export default function Tabs({ items, children, defaultValue = items[0].label, classNames }: Props) {
  const ref = useRef<HTMLButtonElement>(null)
  const [style, setStyle] = useState({ 'active-tab-width': '2.5rem', 'active-tab-left': '0px' })
  const [index, setIndex] = useState(items.findIndex(({ label }) => label === defaultValue))

  useEffect(() => {
    const ele = ref.current
    ele && setStyle({ 'active-tab-width': `${ele.offsetWidth}px`, 'active-tab-left': `${ele.offsetLeft}px` })
  }, [index])

  return (
    <$Tabs.Root style={cssvars(style)} defaultValue={defaultValue} className={`${styles.root} ${classNames?.root}`}>
      <$Tabs.List className={`${styles.list} ${classNames?.list}`}>
        {items.map(({ label }, i) => {
          const isActive = index === i
          return (
            <$Tabs.Trigger
              key={i}
              ref={isActive ? ref : null}
              value={label}
              className={`${styles.trigger} ${classNames?.trigger}`}
              onClick={() => setIndex(i)}
            >
              {label}
            </$Tabs.Trigger>
          )
        })}
      </$Tabs.List>
      {items.map(({ label, component }, i) => (
        <$Tabs.Content key={i} value={label} className={`${styles.content} ${classNames?.content}`}>
          {children ? children({ label }) : component}
        </$Tabs.Content>
      ))}
    </$Tabs.Root>
  )
}
