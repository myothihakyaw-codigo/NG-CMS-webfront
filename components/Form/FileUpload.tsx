import { Fragment, MouseEventHandler, useRef } from 'react'
import Fieldset from './Fieldset'
import type { BaseProp, ChildFunc } from './types'

type Props = BaseProp & {
  accept?: string
  children: ChildFunc<{
    value: string
    setValue: (v: any) => void
    onClick: MouseEventHandler<HTMLElement | SVGElement>
  }>
  onChange?: (v: { files: FileList; setValue: Function }) => void
}

export default function FileUpload({ children, onChange, ...rest }: Props) {
  const ref = useRef<HTMLLabelElement>(null)
  const handleClick = () => ref?.current?.click()
  return (
    <Fieldset {...rest}>
      {({ name, value, onChange: setValue }) => {
        return (
          <Fragment>
            <label ref={ref} htmlFor={name} hidden />
            {children({ value, onClick: handleClick, setValue, ...rest })}
            <input
              id={name}
              key={`${!!value}`}
              type="file"
              name={name}
              hidden
              onChange={e => {
                const files = e.target.files
                if (!!files) {
                  !!onChange ? onChange({ files, setValue }) : setValue(files)
                }
              }}
            />
          </Fragment>
        )
      }}
    </Fieldset>
  )
}
