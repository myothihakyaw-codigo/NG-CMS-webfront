import { Input, Box } from '@chakra-ui/react'
import React, { ChangeEvent, KeyboardEvent } from 'react'
import { useState } from 'react'
import SearchIcon from '../../../icons/Search'

interface IProps {
  handleSearch?: () => void
}

const SearchInput: React.FC<IProps> = ({ handleSearch = () => {} }) => {
  const [inputValue, setInputValue] = useState<string>('')
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e?.currentTarget?.value)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      console.log('Searched with keywords : ', inputValue)
      handleSearch()
    }
  }
  return (
    <Box position={'relative'}>
      <Input
        onChange={handleInputChange}
        fontSize="16px"
        onKeyDown={handleKeyDown}
        value={inputValue}
        width="340px"
        height={'50px'}
        padding={'13px 16px'}
        borderRadius="15px"
        border={'1px solid #DDDDDD'}
        bg="#fff"
        _focus={{
          bg: 'transparent',
          borderColor: '1px solid #c3bebe',
          zIndex: -1,
        }}
      />
      <Box position={'absolute'} right="15px" top={'13px'} onClick={handleSearch} cursor="pointer">
        <SearchIcon />
      </Box>
    </Box>
  )
}

export default SearchInput
