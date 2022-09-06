import lodash from 'lodash'
import { useFormContext } from 'react-hook-form'
import type { BaseProp, ChildFunc } from '../types'
import styles from './Fieldset.module.scss'

type Props = BaseProp & {
  children: ChildFunc<{
    name: string
    value: any
    message?: string
    onChange: (v: any) => void
    onKeyPress: (v: any) => void
  }>
  className?: string
}

const Fieldset = ({ name, message, children, className, onChange, onKeyPress }: Props) => {
  const { setValue, getValues, formState } = useFormContext()
  const value = getValues(name)
  const error = lodash.get(formState.errors, name)
  const $message = error?.message || message

  const handleChange = (value: any) => {
    onChange && onChange(value)
    setValue(name, value, { shouldValidate: true })
  }

  const handleKeyPress = (value: any) => onKeyPress && onKeyPress(value)

  return (
    <fieldset className={`${styles.root} ${!!error && styles.error} ${className}`}>
      {children({
        name,
        value: value === undefined ? '' : value, // To solve uncontrolled to controlled problem
        message: !!$message ? `${$message}` : undefined,
        onChange: handleChange,
        onKeyPress: handleKeyPress,
      })}
    </fieldset>
  )
}

export default Fieldset
