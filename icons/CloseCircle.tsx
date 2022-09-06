import { SVGProps } from 'react'

export default function CloseCirleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="20" fill="white" />
      <path d="M24.2426 24.2427L15.7574 15.7574" stroke="#222222" />
      <path d="M15.7574 24.2427L24.2426 15.7574" stroke="#222222" />
    </svg>
  )
}
