import Text from 'components/Text'
import Title from 'components/Title'
import { LinkedInIcon, TwitterIcon } from 'icons/Socials'
import styles from './Footer.module.scss'

export default function Footer() {
  const links = [
    {
      name: 'Explore',
      links: [
        { label: 'Virtual Care', href: '/' },
        { label: 'Digital Therapeutics', href: '/' },
        { label: 'Science', href: '/' },
      ],
    },
    {
      name: 'Press',
      links: [
        { label: 'In the News', href: '/' },
        { label: 'Privacy Policy', href: '/' },
      ],
    },
    {
      name: 'Company',
      links: [
        { label: 'About Neuroglee', href: '/' },
        { label: 'Our Team', href: '/' },
        { label: 'Investors', href: '/' },
        { label: 'Partners', href: '/' },
        { label: 'Careers', href: '/' },
      ],
    },
  ]
  return (
    <footer className={styles.root}>
      <section className={styles.content}>
        <Text as="h4" size="xxl" bold color="#fff">
          Neuroglee Therapeutics
        </Text>
        <Text size="lg-2x" color="#fff">
          Reimagining care with digital solutions for neurological conditions.
        </Text>
        <div className={styles.socials}>
          <a>
            <TwitterIcon />
          </a>
          <a>
            <LinkedInIcon />
          </a>
        </div>
        <Text color="#fff">Copyright © 2022. Neuroglee Therapeutics</Text>
      </section>
      <section className={styles.links}>
        {links.map(({ name, links }) => (
          <div key={name}>
            <Text size="md" as="h5" color="#fff" bold>
              {name}
            </Text>
            <ul>
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Text as="a" href={href} color="#fff" size="md">
                    {label}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </footer>
  )
}
