import Button from 'components/Button'
import Logo from 'components/Logo'
import CloseCirleIcon from 'icons/CloseCircle'
import MenuIcon from 'icons/Menu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { isContactOpenState } from 'states'
import styles from './Header.module.scss'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Press', href: '/press' },
  { label: 'Join Us', href: '/join-us' },
]

export default function Header() {
  const router = useRouter()
  const setContactOpen = useSetRecoilState(isContactOpenState)
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [router.pathname])

  return (
    <header className={styles.root}>
      <Logo className={styles.logo} />
      <section className={`${styles.list} ${isOpen && styles.open}`}>
        <Blob />
        <Blob />
        <CloseCirleIcon className={styles.close} onClick={() => setOpen(false)} />
        {links.map(({ label, href }, i) => (
          <Link
            key={href}
            href={href}
            style={{ animationDelay: `${i * 0.15}s` }}
            className={`${styles.link} ${router.asPath === href && styles.active}`}
          >
            {label}
          </Link>
        ))}
        <Button
          label="Contact us"
          style={{ animationDelay: `${links.length * 0.15}s` }}
          className={styles.button}
          onClick={() => {
            setOpen(false)
            setContactOpen(true)
          }}
        />
      </section>
      <MenuIcon className={styles.menu} onClick={() => setOpen(true)} />
    </header>
  )
}

const Blob = () => (
  <svg viewBox="0 0 406 421" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.blob}>
    <path
      d="M183.157 0C300.381 0 406 137.002 406 262.243C406 387.485 300.381 421 183.157 421C65.9325 421 0 352.01 0 226.768C0 101.527 65.9325 0 183.157 0Z"
      fill="#FFBC00"
    />
  </svg>
)
