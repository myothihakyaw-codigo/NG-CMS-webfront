import React from 'react'
import { Flex, Box, VStack, StackDivider, HStack } from '@chakra-ui/react'
import SideMenu from '../SideMenu/SideMenu'
import { ReactNode } from 'react'
import Header from '../Header/Header'
// import
interface IProps {
  children: ReactNode
}

const MainPanel: React.FC<IProps> = ({ children }) => {
  return (
    <HStack width={'100%'} marginTop="0px !important">
      <SideMenu />
      <Box height={'100%'} width={'100%'} padding={'35px 47px'}>
        {children}
      </Box>
    </HStack>
  )
}

export default MainPanel
