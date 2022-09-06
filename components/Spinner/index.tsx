import { cssvars } from 'utils'
import styles from './Spinner.module.scss'

type Props = {
  size?: string
  path?: string
  style?: object
  color?: string
  border?: string
  className?: string
}

export default function Spinner({ style, className, ...rest }: Props) {
  return <i style={{ ...cssvars(rest), ...style }} className={`${styles.root} ${className}`} />
}
