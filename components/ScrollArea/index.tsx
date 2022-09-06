import * as $ScrollArea from '@radix-ui/react-scroll-area'
import { ReactNode, StyleHTMLAttributes, useEffect, useState } from 'react'
import styles from './ScrollArea.module.scss'

type Props = {
  style?: StyleHTMLAttributes<HTMLDivElement>
  children: ReactNode
  headless?: boolean
  classNames?: { root?: string; content?: string }
  orientation?: 'vertical' | 'horizontal'
}

export default function ScrollArea({ style, headless, children, classNames, orientation = 'vertical' }: Props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timeout: any
    if (show) {
      timeout = setTimeout(() => setShow(false), 400)
    }
    return () => clearTimeout(timeout)
  }, [show])

  return (
    <$ScrollArea.Root style={style} className={`${styles.root} ${classNames?.root}`}>
      <$ScrollArea.Viewport className={`${styles.viewport} ${classNames?.content}`} onScroll={() => setShow(true)}>
        {children}
      </$ScrollArea.Viewport>
      <$ScrollArea.Scrollbar
        className={`${styles.scrollbar} ${styles[orientation]} ${headless && styles.headless} ${show && styles.show}`}
        forceMount={true}
        orientation={orientation}
      >
        <$ScrollArea.Thumb className={styles.scrollthumb} />
      </$ScrollArea.Scrollbar>
    </$ScrollArea.Root>
  )
}
