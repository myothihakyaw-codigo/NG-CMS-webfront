import DropdownIcon from 'icons/Dropdown'
import { useRef, useState } from 'react'
import RSelect from 'react-select'
import Fieldset from '../Fieldset'
import InputBox from '../InputBox'
import type { BaseProp, InputBoxBaseProps, Option } from '../types'
import styles from './Select.module.scss'

type Props = InputBoxBaseProps &
  BaseProp & {
    label?: string
    options: Option[]
    multiple?: boolean
    className?: string
    placeholder?: string
    isSearchable?: boolean
  }

const Select = ({
  label,
  state,
  variant = 'float',
  options,
  multiple,
  placeholder,
  isSearchable = false,
  ...rest
}: Props) => {
  const ref = useRef<HTMLElement>(null)
  const [isOpen, setOpen] = useState(false)

  return (
    <Fieldset {...rest}>
      {({ name, value, onChange }) => (
        <InputBox
          state={state}
          label={label}
          value={value}
          variant={variant}
          postfix={() => (
            <DropdownIcon
              style={{
                transform: `rotate(${isOpen ? 180 : 0}deg)`,
                transition: 'all 0.25s linear',
                pointerEvents: isOpen ? 'none' : 'auto',
              }}
              onClick={() => ref.current?.click()}
            />
          )}
          onChange={onChange}
        >
          <RSelect
            value={options.filter(option => value === option.value)}
            inputId={name}
            options={options}
            isMulti={multiple}
            isSearchable={isSearchable}
            isDisabled={state === 'disable'}
            placeholder={placeholder}
            className={`${styles.root}  ${styles[variant]} select`}
            components={{ DropdownIndicator: () => <i ref={ref} /> }}
            classNamePrefix="react-select"
            openMenuOnFocus={true}
            onChange={(option: any) => {
              !multiple
                ? onChange(option.value)
                : onChange(option.length > 0 ? option.map((option: Option) => option.value) : undefined)
            }}
            onMenuOpen={() => setOpen(true)}
            onMenuClose={() => setOpen(false)}
          />
        </InputBox>
      )}
    </Fieldset>
  )
}

export default Select
