import animejs, { AnimeParams } from 'animejs'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cssvars } from 'utils'
import styles from './Anime.module.scss'

type Props = AnimeParams & { item: ReactNode; duration?: number }

export default function Anime({ item, duration = 1000, ...rest }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref)
  const [show, setShow] = useState(isInView)

  useEffect(() => {
    const span = ref.current
    if (span) {
      animejs({
        targets: span.querySelectorAll('path'),
        strokeDashoffset: [animejs.setDashoffset, 0],
        easing: 'linear',
        duration,
        ...rest,
      })
      animejs({
        targets: span.querySelectorAll('.fade-in'),
        opacity: [0, 1],
        easing: 'linear',
        delay: 250,
        duration: 250,
        ...rest,
      })
      animejs({
        targets: span.querySelectorAll('.blob'),
        opacity: [0, 1],
        easing: 'linear',
        delay: (el, i) => i * 250 + duration,
        duration: 200,
        ...rest,
      })
      setShow(true)
    }
  }, [duration, rest])

  return (
    <span ref={ref} style={cssvars({ delay: duration })} className={`${styles.root} ${!!show && styles.show}`}>
      {item}
    </span>
  )
}
