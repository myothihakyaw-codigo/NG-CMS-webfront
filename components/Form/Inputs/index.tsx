import CloseCirleIcon from 'icons/CloseCircle'
import DropdownIcon from 'icons/Dropdown'
import { EyeCloseIcon, EyeOpenIcon } from 'icons/Eye'
import SearchIcon from 'icons/Search'
import { HTMLInputTypeAttribute, useState } from 'react'
import Fieldset from '../Fieldset'
import InputBox from '../InputBox'
import type { Addon, BaseProp, InputBoxBaseProps } from '../types'
import styles from './Inputs.module.scss'
import codes from 'country-calling-code'
import ScrollArea from 'components/ScrollArea'
import { Input as BaseInput } from '@chakra-ui/react'

type Props = InputBoxBaseProps &
  BaseProp & {
    label?: string
    className?: string
    placeholder?: string
    onClose?: any
  }

type InputProps = Props & {
  type?: HTMLInputTypeAttribute
  value?: string
  prefix?: Addon
  postfix?: Addon
}

export const Input = ({ type = 'text', state, label, variant, prefix, postfix, placeholder, ...rest }: InputProps) => {
  return (
    <Fieldset {...rest}>
      {({ name, message, value, onChange, onKeyPress }) => (
        <BaseInput
          width={'381px'}
          border="1px solid rgba(0, 0, 0, 0.1)"
          height={'60px'}
          name={name}
          id={name}
          type={type}
          value={value}
          disabled={state === 'disable'}
          className="input"
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
          fontSize="16px"
        />
      )}
    </Fieldset>
  )
}

export const Phone = ({ name, label, state, placeholder, ...rest }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Fieldset name={name} {...rest}>
      {({ name, value, onChange }) => (
        <InputBox value={' '} state={state} label={label} onChange={onChange}>
          <div className="phone">
            <Fieldset name={`${name}Code`}>
              {({ value, onChange }) => (
                <div className={`${styles.code} ${open && styles.open}`}>
                  <p onClick={() => setOpen(v => !v)}>
                    <span>{value}</span>
                    <DropdownIcon />
                  </p>
                  <ScrollArea classNames={{ root: styles.countries, content: styles.list }}>
                    {codes.map(({ country, countryCodes }) => {
                      const code = `+${countryCodes[0].replace('-', '')}`
                      return (
                        <p
                          key={country}
                          className={styles.item}
                          onClick={() => {
                            setOpen(false)
                            onChange(code)
                          }}
                        >
                          <span>{country}</span>
                          <span>{code}</span>
                        </p>
                      )
                    })}
                  </ScrollArea>
                </div>
              )}
            </Fieldset>
            <input
              id={name}
              type="tel"
              value={value}
              placeholder={placeholder}
              onChange={e => onChange(e.target.value.replace(/\D/g, ''))}
            />
          </div>
        </InputBox>
      )}
    </Fieldset>
  )
}

export const Password = (props: Props) => {
  const [isVisible, setVisible] = useState(false)
  const handleToggle = () => setVisible(!isVisible)
  return (
    <Input
      {...props}
      type={isVisible ? 'text' : 'password'}
      postfix={
        isVisible ? (
          <EyeOpenIcon onClick={handleToggle} className={styles.addon} />
        ) : (
          <EyeCloseIcon onClick={handleToggle} className={styles.addon} />
        )
      }
    />
  )
}

export const Search = (props: Props) => {
  return (
    <Input
      {...props}
      type="text"
      postfix={({ empty, onChange }) =>
        empty ? (
          <SearchIcon className={styles.addon} />
        ) : (
          <CloseCirleIcon
            onClick={() => {
              onChange('')
              props.onClose && props.onClose()
            }}
            className={styles.addon}
          />
        )
      }
    />
  )
}
