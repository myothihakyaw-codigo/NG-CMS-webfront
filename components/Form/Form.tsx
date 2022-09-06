import { yupResolver } from '@hookform/resolvers/yup'
import { useMutateQuery } from 'hooks/useQuery'
import { HTMLAttributes, HTMLProps, ReactNode } from 'react'
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form'
import { ElementState } from 'types'
import type { Request, Response, ResponseError } from 'types/Api'
import { AnyObjectSchema, object } from 'yup'
import type { ChildFunc } from './types'

export type FormProps<T = unknown> = Omit<HTMLProps<HTMLFormElement>, 'children'> & {
  url?: string
  schema?: AnyObjectSchema
  config?: Request
  children: ReactNode | ChildFunc<UseFormReturn & T & { values: any; states: States; isValid?: boolean }>
  defaults?: object
  transform?: (v: any) => object
  onError?: (err: ResponseError & { values: any; setError: Function }) => void
  onSuccess?: OnSuccess
  onSubmit?: OnSubmit
}

type OnSubmit = (values: any) => void

export type OnSuccess = (res: Response & { values: any }) => void

type States = { input: ElementState; button: ElementState }

const Form = ({
  url,
  style,
  schema = object({}),
  defaults,
  children,
  config,
  className,
  transform,
  onError,
  onSuccess,
  onSubmit,
}: FormProps) => {
  const form = useForm({ resolver: yupResolver(schema), defaultValues: defaults, reValidateMode: 'onChange' })
  const { mutate, isLoading } = useMutateQuery()
  const states: States = {
    input: isLoading ? 'disable' : '',
    button: isLoading ? 'loading' : !form.formState.isValid ? 'disable' : '',
  }

  const handleSubmit: OnSubmit = values => {
    const newValues = !!transform ? transform(values) : values

    !url
      ? onSuccess && onSuccess({ data: {}, message: 'OK', values })
      : mutate(
          { url, payload: newValues, ...config },
          {
            onError: err => {
              const setError = (name: never, message: string) => form.setError(name, { type: 'validate', message })
              onError && onError({ ...err, values, setError })
            },
            onSuccess: res => {
              onSuccess && onSuccess({ ...res, values })
            },
          }
        )
  }

  form.watch()

  return (
    <FormProvider {...form}>
      <form style={style} className={className} onSubmit={form.handleSubmit(onSubmit || handleSubmit)}>
        {typeof children === 'function'
          ? children({ ...form, states, values: form.getValues(), isValid: form.formState.isValid })
          : children}
      </form>
    </FormProvider>
  )
}

export default Form
