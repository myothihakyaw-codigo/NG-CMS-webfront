import Image from 'components/Image'
import Spinner from 'components/Spinner'
import { ReactNode, useState } from 'react'
import { handleImageUpload } from 'utils/image'
import FileUpload from '../FileUpload'
import type { BaseProp } from '../types'
import styles from './AvatarPicker.module.scss'

type Props = BaseProp & {
  url?: string
  children?: ReactNode
  onUpload?: (args: { value: string; onSuccess: Function }) => void
}

export default function AvatarPicker({ url, name, children, onUpload }: Props) {
  const [isLoading, setLoading] = useState(false)

  return (
    <FileUpload
      name={name}
      accept="image/*"
      onChange={({ files, setValue }) => {
        const avatar = files[0]
        if (avatar) {
          const handleSuccess = (base64: string) => {
            setValue(base64)
            setLoading(false)
          }
          setLoading(true)
          handleImageUpload(avatar, { width: 800, height: 800 }).then(base64 => {
            onUpload ? onUpload({ value: base64, onSuccess: () => handleSuccess(base64) }) : handleSuccess(base64)
          })
        }
      }}
    >
      {({ value, onClick }) => {
        return (
          <div className={styles.root} onClick={onClick}>
            <div className={styles.image}>
              <Spinner
                size="10rem"
                border="0.25rem"
                style={{ zIndex: 1, position: 'absolute', opacity: isLoading ? 1 : 0 }}
              />
              {url || value ? (
                <Image
                  key={url}
                  alt="avatar"
                  src={value ? `data:image/webp;base64,${value}` : `${url}`}
                  layout="fill"
                />
              ) : (
                <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.9633 0L9.07308 3.67649H2.64629C1.18006 3.67649 0 4.82434 0 6.24997V22.4265C0 23.8524 1.18033 25 2.64629 25H28.3537C29.8199 25 31 23.8521 31 22.4265V6.24997C31 4.82434 29.8197 3.67649 28.3537 3.67649H21.9269L20.0367 0H10.9633ZM15.4999 6.61768C19.8711 6.61768 23.4389 10.0875 23.4389 14.3383C23.4389 18.5891 19.8709 22.0589 15.4999 22.0589C11.1288 22.0589 7.56081 18.5891 7.56081 14.3383C7.56081 10.0875 11.1288 6.61768 15.4999 6.61768ZM15.4999 8.82371C12.3546 8.82371 9.82911 11.2797 9.82911 14.3384C9.82911 17.3972 12.3546 19.8532 15.4999 19.8532C18.6451 19.8532 21.1706 17.3972 21.1706 14.3384C21.1706 11.2797 18.6451 8.82371 15.4999 8.82371Z"
                    fill="#25324E"
                  />
                </svg>
              )}
            </div>
            {children}
          </div>
        )
      }}
    </FileUpload>
  )
}
