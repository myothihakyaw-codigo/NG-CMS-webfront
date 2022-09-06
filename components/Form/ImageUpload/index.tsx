import { useElementSize } from '@mantine/hooks'
import { FileUpload } from 'components/Form'
import type { BaseProp } from 'components/Form/types'
import Image from 'components/Image'
import Spinner from 'components/Spinner'
import { CameraAdd } from 'icons/CameraAdd'
import CloseCirleIcon from 'icons/CloseCircle'
import { MouseEventHandler, ReactNode, useState } from 'react'
import { handleImageUpload } from 'utils/image'
import styles from './ImageUpload.module.scss'

type Props = BaseProp & {
  readonly?: boolean
  children?: (args: { onClick: MouseEventHandler<SVGElement | HTMLElement> }) => ReactNode
  className?: string
  defaultFile?: string
}

export default function ImageUpload({
  name,
  readonly,
  className,
  children = ({ onClick }) => <CameraAdd className={styles.camera} onClick={onClick} />,
}: Props) {
  const { ref, width } = useElementSize()
  const [style, setStyle] = useState({ width: width, height: width })
  const [isLoading, setLoading] = useState(false)

  return (
    <FileUpload
      name={name}
      accept="image/*"
      onChange={({ files, setValue }) => {
        const image = files[0]
        if (image) {
          setLoading(true)
          handleImageUpload(image).then(base64 => {
            setValue(base64)
            setLoading(false)
          })
        }
      }}
    >
      {({ value, setValue, onClick }) => {
        return (
          <div ref={ref} className={className}>
            {isLoading ? (
              <Spinner size="5rem" border="0.25rem" className={styles.spinner} />
            ) : !value ? (
              children({ onClick })
            ) : (
              <Image
                alt=""
                src={value?.includes('http') ? value : `data:image/webp;base64,${value}`}
                objectFit="cover"
                className={styles.image}
                {...style}
                onLoad={e => {
                  const img: any = e.target
                  const ratio = img.naturalHeight / img.naturalWidth
                  setStyle({ width, height: width * ratio })
                }}
              >
                {!readonly && <CloseCirleIcon className={styles.remove} onClick={() => setValue('')} />}
              </Image>
            )}
          </div>
        )
      }}
    </FileUpload>
  )
}

//    <ImagePreview width={width} className={classNames?.image} src={value} onRemove={() => setValue('')} />
