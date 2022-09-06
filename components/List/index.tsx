import Text from 'components/Text'
import styles from './List.module.scss'

type Props = {
  style?: 'bullet' | 'check'
  items: string[]
  className?: string
}

const CheckIcon = () => (
  <svg width={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="5.5" />
    <path d="M4 5.85184L5.42857 7.33332L8 4.66666" />
  </svg>
)

export default function List({ style = 'bullet', items, className }: Props) {
  const icons = {
    check: <CheckIcon />,
    bullet: '•',
  }
  return (
    <ul className={`${styles.list} ${styles[style]} ${className}`}>
      {items?.map((item, i) => (
        <Text key={i} as="li" size="md-2x" className={styles.item}>
          <i>{icons[style]}</i>
          <span>{item}</span>
        </Text>
      ))}
    </ul>
  )
}
