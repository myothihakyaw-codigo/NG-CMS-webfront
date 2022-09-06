import Text from 'components/Text'
import DropdownIcon from 'icons/Dropdown'
import { useState } from 'react'
import styles from './DropdownRadio.module.scss'

type Props = {
  items: string[]
  value: string
  className?: string
  onChange: Function
}

export default function DropdownRadio({ items, value, className, onChange }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.root} ${open && styles.open} ${className}`}>
      <p className={styles.trigger} onClick={() => setOpen(v => !v)}>
        <Text as="span" size="md" bold>
          {value}
        </Text>
        <DropdownIcon className={`${styles.icon} ${open && styles.upward}`} />
      </p>
      <ul className={styles.content}>
        {items.map(item => (
          <Text
            as="li"
            key={item}
            size="md"
            onClick={() => {
              setOpen(false)
              onChange(item)
            }}
          >
            {item}
          </Text>
        ))}
      </ul>
    </div>
  )
}
