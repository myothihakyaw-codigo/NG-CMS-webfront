import { SVGProps } from 'react'

export default function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L16.4697 17.5303ZM12.4697 13.5303L16.4697 17.5303L17.5303 16.4697L13.5303 12.4697L12.4697 13.5303Z"
        fill="#898A8D"
      />
      <circle cx="9" cy="9" r="6" stroke="#898A8D" strokeWidth="1.5" />
    </svg>
  )
}
