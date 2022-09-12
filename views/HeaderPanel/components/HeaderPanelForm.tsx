import React from 'react'
import { HStack, Box, Button } from '@chakra-ui/react'

import SearchInput from './SearchInput'
import Text from 'components/Typography/Text'
import { useRouter } from 'next/router'

interface IProps {
  searchAction: () => void
  createBtnName: string
}

const HeaderPanelForm: React.FC<IProps> = ({ searchAction, createBtnName }) => {
  const router = useRouter()
  // To prevent the component from create new var when render
  const handleClick = () => {
    router.push('/accounts/create')
  }
  return (
    <HStack gap={'15px'}>
      <SearchInput handleSearch={searchAction} />

      <Button
        padding={'12px 30px'}
        width="200px"
        height={'50px'}
        borderRadius={'30px'}
        bg="#FBB901"
        border={'none'}
        _hover={{
          bg: '#d59d05',
        }}
        onClick={handleClick}
      >
        <Text color={'#fff'} fontWeight="700">
          {createBtnName}
        </Text>
      </Button>
    </HStack>
  )
}

export default HeaderPanelForm
