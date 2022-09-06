import Text from 'components/Text'
import { Fragment, useRef } from 'react'
import { ElementState } from 'types'
import Fieldset from '../Fieldset'
import type { BaseProp } from '../types'
import styles from './OTP.module.scss'

type Props = BaseProp & { label?: String; buttonState: ElementState; isError: boolean }

export default function OTP({ label, buttonState, isError, ...rest }: Props) {
  const ref = useRef<HTMLButtonElement>(null)
  const codes = ['', '', '', '', '', '']

  return (
    <Fragment>
      <Text size="md">{label}</Text>
      <Fieldset {...rest} className={styles.fieldset}>
        {({ name, value, onChange }) => {
          const values = [...value]
          return (
            <>
              <label htmlFor={name} className={styles.list}>
                {codes.map((code, i) => (
                  <b
                    key={i}
                    className={`${styles.item} ${isError && styles.error} 
                    ${(values.length !== 6 ? values.length === i : i === 5) && styles.focus}`}
                  >
                    {values[i] || code}
                  </b>
                ))}
              </label>
              <input
                id={name}
                value={value}
                onChange={e => {
                  const btn = ref.current
                  const value = e.target.value.replace(/\D/g, '')
                  const length = value.length
                  if (length <= 6) {
                    onChange(value)
                    length === 6 && buttonState !== 'loading' && btn && btn.click()
                  }
                }}
              />
              <button ref={ref} type="submit" />
            </>
          )
        }}
      </Fieldset>
    </Fragment>
  )
}
