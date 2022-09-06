import { SVGProps } from 'react'

export function EyeCloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.06201 10.054L2 11.008" />
      <path d="M16.3999 10.0459L17.5 11" />
      <path d="M2 6.84592C2.7619 8.75068 5.80952 12.1792 10.381 12.1792C14.9524 12.1792 17.2381 8.75068 18 6.84592" />
      <path d="M7.60015 12.0459L6.63739 13.9082" />
      <path d="M12.3999 12.4459L13 14" />
    </svg>
  )
}

export function EyeOpenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19.6682 8.78144C19.4997 8.57089 15.3291 4 10 4C4.67091 4 0.500317 8.5708 0.331808 8.76037C-0.110603 9.26594 -0.110603 10.0031 0.331808 10.4877C0.500336 10.7192 4.67091 15.2902 10 15.2902C15.3291 15.2902 19.4997 10.7194 19.6682 10.5298C20.1106 10.0242 20.1106 9.26605 19.6682 8.78151V8.78144ZM10 13.6261C7.80946 13.6261 6.01898 11.8568 6.01898 9.66611C6.01898 7.47557 7.80946 5.68509 10 5.68509C12.1905 5.68509 13.981 7.47557 13.981 9.66611C13.981 11.8357 12.1905 13.6261 10 13.6261V13.6261Z" />
      <path d="M9.99999 7.30698C8.71511 7.30698 7.66193 8.36016 7.66193 9.64504C7.66193 10.9299 8.71511 11.9831 9.99999 11.9831C11.2849 11.9831 12.338 10.9299 12.338 9.64504C12.338 8.36016 11.2849 7.30698 9.99999 7.30698Z" />
    </svg>
  )
}