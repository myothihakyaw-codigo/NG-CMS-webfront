import { ReactNode } from 'react'

export type Popup = {
  style?: {}
  children?: ReactNode | ((args: { onClose: Function }) => ReactNode)
  className?: string
}

export type Alert = null | { type: 'success' | 'error'; message: string }

export type Toast = { type?: ToastType; title: string; description: string; onClose?: Function }

export type ToastType = 'success' | 'error'

export type ElementState = '' | 'loading' | 'disable' | 'error'
