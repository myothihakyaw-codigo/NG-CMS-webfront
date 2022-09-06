import Anime from 'components/Anime'
import { motion, useScroll, useSpring } from 'framer-motion'
import Discussing from 'illustrations/Discussing'
import Hugging from 'illustrations/Hugging'
import { useViewportSize } from '@mantine/hooks'
import { ReactNode, useEffect, useRef } from 'react'
import styles from './Index.module.scss'

const Title = ({ children }: { children: ReactNode }) => (
  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    className={styles.title}
    transition={{ duration: 0.5, ease: 'linear' }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {children}
  </motion.h1>
)

const Content = ({ children }: { children: ReactNode }) => (
  <motion.p
    initial={{ opacity: 0, y: 50 }}
    className={styles.description}
    transition={{ duration: 0.5, ease: 'linear', delay: 0.15 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {children}
  </motion.p>
)

export default function Index() {
  const mainRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { width, height } = useViewportSize()
  const { scrollYProgress } = useScroll({ container: mainRef })

  useEffect(() => {
    const main = mainRef.current
    const hero = heroRef.current
    if (hero && main) {
      const path: SVGPathElement | null = hero.querySelector('#line-1')
      if (path) {
        const rect = path.getBoundingClientRect()
        const ratio = rect.width / rect.height + width / height
        const pathLength = path.getTotalLength()
        path.style.strokeDasharray = pathLength + ' ' + pathLength
        path.style.strokeDashoffset = `${pathLength}`
        return scrollYProgress.onChange(percent => {
          const draw = pathLength * percent * 2
          path.style.strokeDashoffset = `${draw - pathLength}`
        })
      }
    }
  }, [height])

  return (
    <main ref={mainRef} className={styles.main}>
      <section ref={heroRef} className={styles.section}>
        <svg viewBox="0 0 1175 2264" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.line}>
          <path
            d="M1079.79 2260.76C794.377 2277.85 504.077 2199.57 265.947 2041.31C195.087 1994.21 127.987 1939.47 78.0772 1870.56C28.1672 1801.65 -3.61283 1717.24 1.54717 1632.31C6.70717 1547.38 52.5172 1463.13 127.487 1422.93C208.547 1379.43 307.067 1391.73 397.697 1407.49C415.147 1410.53 433.157 1413.64 450.417 1409.68C467.687 1405.73 484.187 1392.78 486.547 1375.23C490.237 1347.75 465.14 1325.22 437.5 1323C396.48 1319.7 345 1318.5 317.887 1364C294.907 1398.13 299.407 1457.44 317.887 1494.2C337.737 1533.7 379.197 1559.11 422.367 1568.61C465.537 1578.11 510.557 1573.59 554.087 1565.92C649.997 1549.02 748.067 1513.75 810.557 1439.05C860.937 1378.83 882.527 1299.78 894.947 1222.26C907.357 1144.73 912.117 1065.52 935.017 990.415C955.684 922.666 1009.5 709 1116.5 709C1181.5 709 1202.5 814.5 1116.5 814.5C1041 814.5 1064.53 665.71 1001 595.815C855.817 436.081 608.596 467.97 430.017 560.345C394.099 578.92 354.64 596.127 315 604.033C278.325 611.349 241.494 610.703 207.167 595.815C154.327 572.905 118.697 517.365 114.937 459.895C111.167 402.415 137.327 344.845 179.717 305.855C222.107 266.865 279.387 245.855 336.897 242.715C377.727 240.485 427.757 242.315 448.517 207.085C459.657 188.185 457.447 163.485 447.147 144.105C436.857 124.725 419.547 109.975 401.167 97.995C364.647 74.185 322.837 59.645 285.377 37.355C268.231 27.1553 251.667 14.6627 238.005 0"
            id="line-1"
            stroke="#FFBC00"
            strokeWidth="1.5"
          />
        </svg>
        <div className={styles.hero}>
          <Anime item={<Discussing className={styles.image} />} />
          <Title>Reimagining Care</Title>
          <Content>
            Neuroglee Therapeutics reimagines the care of patients living with neurological conditions by developing
            digital cognitive health solutions that empower patients, families, and clinicians in preserving cognition
            and independence.
          </Content>
        </div>
        <div className={styles.mission}>
          <Anime item={<Hugging className={styles.image} />} />
          <Title>Better Care for Better Minds</Title>
          <Content>
            Even after decades of scientific research and progress, neurological conditions continue to be a challenging
            reality for those experiencing them. Treatments are few and far between. Care is fragmented and limited. And
            the burden weighs heavily on the families providing care.
          </Content>
        </div>
      </section>
      <section className={styles.testimonial}></section>
      <section className={styles.testimonial}></section>

      {/* <ViewInto className={styles.hero}>
        <Anime item={<Discussion className={styles.image} />} />
      </ViewInto>
      <ViewInto className={styles.hero2}>
        <Anime item={<Discussion className={styles.image} />} />
      </ViewInto> */}

      {/* <ViewInto className={styles.fuck}></ViewInto> */}
    </main>
  )
}
