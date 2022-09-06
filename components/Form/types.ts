import type { ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import { ElementState } from 'types'

export type Addon = ReactNode | ((props: { empty: boolean; onChange: Function }) => ReactNode)

export type Option = { label: string; value: any }

export type BaseProp = {
  name: string
  message?: string
  onChange?: (value: any) => void
  onKeyPress?: (value: any) => void
}

export type InputBoxBaseProps = {
  state?: ElementState
  message?: string
  variant?: 'normal' | 'float'
}

export type ChildFunc<T> = (arg: T) => ReactNode

export type TagInputProps = {
  name: string
  value: any
  onChange: (value: any) => void
  maxLength?: number
  data?: any
  placeholder?: string
  register?: any
  onAdd?: any
}

export type DropZoneProps = {
  name: string
  placeholder?: string
  mode?: 'update' | 'append'
  maxFiles?: number
  maxSize?: number
  accept?: any
  multiple?: boolean
  isFullScreen?: boolean
}
