import Fieldset from '../Fieldset'
import * as RadioGroup from '@radix-ui/react-radio-group'
import type { BaseProp, Option } from '../types'
import styles from './Radio.module.scss'
import Text from 'components/Text'

type Props = BaseProp & {
  options: Option[]
  className?: {
    list?: string
  }
}

const Radio = ({ options, className, ...props }: Props) => {
  return (
    <Fieldset {...props} className={styles.select}>
      {({ value, onChange }) => {
        return (
          <RadioGroup.Root
            className={`${styles.list} ${className?.list ? className?.list : ''}`}
            defaultValue={value}
            onValueChange={onChange}
          >
            {options.map(({ label, value }) => (
              <RadioGroup.Item className={styles.item} key={value} value={value}>
                <i className={styles.icon} />
                <Text size="lg" color="#25324E">
                  {label}
                </Text>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        )
      }}
    </Fieldset>
  )
}

export default Radio
