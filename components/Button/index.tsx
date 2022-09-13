import React, { MouseEvent } from 'react'
import { Button, Spinner } from '@chakra-ui/react'
import Text from 'components/Typography/Text'
import { useRouter } from 'next/router'

interface IBaseButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  isLoading?: boolean
  loadingIcon?: React.ReactElement
  theme?: 'danger' | 'info'
  color?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export const BaseButton: React.FC<IBaseButton> = ({
  isLoading,
  title = 'save',
  loadingIcon = null,
  size = 'md',
  color = '#0080FF',
  theme,
}) => {
  return (
    <Button
      size={size}
      padding="10"
      borderRadius={'32px'}
      width={'180px'}
      bgColor={color}
      isLoading={isLoading}
      _hover={{
        bgColor: '#016ad2',
      }}
      spinner={loadingIcon ? loadingIcon : <Spinner size={'md'} />}
    >
      <Text color={'#fff'}>{title}</Text>
    </Button>
  )
}

export const OutlineButton: React.FC<IBaseButton> = ({
  isLoading,
  title = 'save',
  loadingIcon = null,
  size = 'md',
  color = '0080FF',
  theme,
}) => {
  return (
    <Button
      size={size}
      variant={'outline'}
      colorScheme={'red'}
      isLoading={isLoading}
      spinner={loadingIcon ? loadingIcon : <Spinner size={'md'} />}
    >
      <Text color={'#fff'}>{title}</Text>
    </Button>
  )
}
