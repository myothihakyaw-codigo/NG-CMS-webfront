import { useState } from 'react'
import { cssvars } from 'utils'
import Form, { FormProps, OnSuccess } from './Form'
import type { ChildFunc } from './types'

type Props = {
  forms: Forms
  children: ChildFunc<{ step: number; setStep: (v: number) => void }>
  classNames?: { root?: string; forms?: string; form?: string }
}
export type Forms = FormProps<{ step: number }>[]

export default function MultiForm({ forms, classNames = {}, children }: Props) {
  const [step, setStep] = useState<number>(1)
  const [values, setValues] = useState<object>({})

  const handleSuccess: (v?: OnSuccess) => OnSuccess =
    onSuccess =>
    ({ values: $values, ...rest }) => {
      const newValues = { ...values, ...$values }
      !!onSuccess && onSuccess({ values: newValues, ...rest })
      setStep(n => n + 1)
      setValues(newValues)
    }

  return (
    <div className={classNames.root} style={cssvars({ step, steps: forms.length })}>
      {typeof children === 'function' ? children({ step, setStep }) : children}
      <div className={classNames.forms}>
        {forms.map(({ children, onSuccess, transform, ...rest }, i) => (
          <Form
            key={i}
            onSuccess={handleSuccess(onSuccess)}
            transform={transform ? val => transform({ ...val, ...values }) : undefined}
            {...rest}
          >
            {typeof children !== 'function'
              ? children
              : props => children({ ...props, step, values: { ...props.values, ...values } })}
          </Form>
        ))}
      </div>
    </div>
  )
}
