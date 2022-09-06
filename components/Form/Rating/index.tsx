import StarIcon from 'icons/Star'
import Fieldset from '../Fieldset'
import type { BaseProp } from '../types'
import styles from './Rating.module.scss'

type Props = BaseProp & {}

export default function Rating(props: Props) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <Fieldset {...props}>
      {({ value, onChange }) => (
        <div className={styles.list}>
          {stars.map(star => (
            <StarIcon
              key={star}
              className={`${styles.star} ${star <= value && styles.active}`}
              onClick={() => onChange(star === value ? star - 1 : star)}
            />
          ))}
        </div>
      )}
    </Fieldset>
  )
}
