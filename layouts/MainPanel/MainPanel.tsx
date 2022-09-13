import React from 'react'
import { Flex, Box, VStack, StackDivider, HStack } from '@chakra-ui/react'
import SideMenu from '../SideMenu/SideMenu'
import { ReactNode } from 'react'
import Header from '../Header/Header'
// import
interface IProps {
  children: ReactNode
}

/**
 * Need to set overflow: hidden for child container to be scrollable and also need to set height property in child container
 */

const MainPanel: React.FC<IProps> = ({ children }) => {
  return (
    <HStack alignItems={'flex-start'} width={'100%'} marginTop="0px !important" overflow={'hidden'}>
      <SideMenu />
      <Box marginInlineStart={'0px !important'} width={'100%'} height="100%" overflow="scroll">
        {children}
      </Box>
    </HStack>
  )
}

export default MainPanel
