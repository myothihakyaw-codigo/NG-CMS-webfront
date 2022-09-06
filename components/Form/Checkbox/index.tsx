// import * as $Checkbox from '@radix-ui/react-checkbox'
import Button from 'components/Button'
import Text from 'components/Text'
import { ReactNode } from 'react'
import Fieldset from '../Fieldset'
import type { BaseProp, Option } from '../types'
import styles from './Checkbox.module.scss'

type Props = BaseProp & {
  label?: String | ReactNode
  options?: Option[]
  variant?: 'square' | 'round'
  className?: string
}

const Checkbox = ({ options, label, variant = 'square', className, ...props }: Props) => {
  const isSingle = options === undefined

  return (
    <Fieldset {...props} className={styles.select}>
      {({ value, onChange }) => {
        const items = isSingle ? [{ label, value }] : options
        return (
          <div className={`${styles.list} ${className}`}>
            {items.map(({ label, value: $value }, i) => {
              const isChecked = isSingle ? !!value : value?.includes($value)
              const handleToggle = (isChecked: boolean) => {
                isSingle
                  ? onChange(isChecked)
                  : onChange(isChecked ? [...value, $value] : value.filter((v: string) => v !== $value))
              }

              return (
                <$Checkbox.Root
                  key={i}
                  checked={isChecked}
                  className={`${styles.item} ${!!options && styles.center}`}
                  onCheckedChange={handleToggle}
                >
                  <i className={`${styles.icon} ${styles[variant]}`}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.882324 3.41178L3.8235 6.35296L9.11762 1.05884" stroke="white" strokeWidth="2" />
                    </svg>
                  </i>
                  <Text size="md-2x" className={styles.label}>
                    {label}
                  </Text>
                </$Checkbox.Root>
              )
            })}
          </div>
        )
      }}
    </Fieldset>
  )
}

export default Checkbox
