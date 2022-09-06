import $Lottie, { LottieComponentProps } from 'lottie-react'
import styles from './Lottie.module.scss'

type Props = Omit<LottieComponentProps, 'animationData' | 'data'> & { data: any }

const Lottie = ({ data, loop = false, autoPlay = true, className, ...rest }: Props) => {
  return (
    <$Lottie loop={loop} autoPlay={autoPlay} className={`${styles.root} ${className}`} animationData={data} {...rest} />
  )
}

export default Lottie
