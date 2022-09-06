import { SVGProps } from 'react'

export default function DropdownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="7" cy="7" r="7" transform="rotate(90 7 7)" fill="currentColor" />
      <path d="M5 6L7 8L9 6" stroke="white" />
    </svg>
  )
}
