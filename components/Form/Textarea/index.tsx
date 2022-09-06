import Fieldset from '../Fieldset'
import InputBox from '../InputBox'
import type { BaseProp } from '../types'
import styles from './Textarea.module.scss'

type Props = BaseProp & {
  label?: string
  className?: string
}

export default function Textarea({ label, ...rest }: Props) {
  return (
    <Fieldset {...rest}>
      {({ name, value, message, onChange }) => (
        <InputBox value={value} label={label} message={message} onChange={onChange}>
          <div className={styles.root}>
            <p>{value}</p>
            <textarea id={name} value={value} onChange={e => onChange(e.target.value)} />
          </div>
        </InputBox>
      )}
    </Fieldset>
  )
}
