import { SVGProps } from 'react'

export const CameraAdd = ({ style, ...rest }: SVGProps<SVGSVGElement>) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: 'pointer', ...style }}
    {...rest}
  >
    <rect width="64" height="64" rx="8" fill="#DDDEDB" />
    <path
      d="M35.5 39H24C23.4477 39 23 38.5523 23 38V28.5C23 27.9477 23.4477 27.5 24 27.5H26.5858C26.851 27.5 27.1054 27.3946 27.2929 27.2071L29.2071 25.2929C29.3946 25.1054 29.649 25 29.9142 25L34.9338 25C35.2851 25 35.6106 25.1843 35.7913 25.4855L36.7087 27.0145C36.8894 27.3157 37.2149 27.5 37.5662 27.5H40C40.5523 27.5 41 27.9477 41 28.5V34"
      stroke="#898A8D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M37 37.3181L41 37.3181" stroke="#898A8D" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M39 35.5L39 39.5" stroke="#898A8D" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="32" cy="32.5" r="3" stroke="#898A8D" strokeWidth="1.5" />
  </svg>
)
