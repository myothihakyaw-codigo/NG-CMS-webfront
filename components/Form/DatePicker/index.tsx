import CalendarIcon from 'icons/Calendar'
import { ChevronLeftIcon, ChevronRightIcon } from 'icons/Chevron'
import React from 'react'
import $DatePicker from 'react-datepicker'
import { months } from 'utils'
import Fieldset from '../Fieldset'
import InputBox from '../InputBox'
import { BaseProp } from '../types'

import styles from './DatePicker.module.scss'

type Props = BaseProp & { label?: string }

export default function DatePicker({ label, ...rest }: Props) {
  const today = new Date()

  const Input = React.forwardRef(function InputForward({ value, onClick, onChange, ...rest }: any, ref) {
    const todayFormat = today.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })

    return (
      <InputBox
        label={label}
        value={value}
        postfix={<CalendarIcon className={styles.calendarIcon} />}
        onClick={onClick}
        onChange={onChange}
      >
        <input value={value === todayFormat ? 'Today' : value} className="date" onChange={() => {}} />
      </InputBox>
    )
  })
  return (
    <Fieldset className={styles.root} {...rest}>
      {({ value, onChange }) => (
        <$DatePicker
          minDate={today}
          selected={value}
          customInput={<Input onChange={onChange} />}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className={styles.header}>
              <ChevronLeftIcon
                className={prevMonthButtonDisabled ? styles.disable : ''}
                onClick={() => !prevMonthButtonDisabled && decreaseMonth()}
              />
              <p>
                {months.find(({ value }) => date.getMonth() + 1 === value)?.label} {date.getFullYear()}
              </p>
              <ChevronRightIcon
                className={nextMonthButtonDisabled ? styles.disable : ''}
                onClick={() => !nextMonthButtonDisabled && increaseMonth()}
              />
            </div>
          )}
          onChange={onChange}
        />
      )}
    </Fieldset>
  )
}
