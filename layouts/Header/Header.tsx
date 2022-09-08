import React from 'react'
import {
  Box,
  Flex,
  HStack,
  Menu,
  StackDivider,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  MenuDivider,
  useMediaQuery,
  useBreakpointValue,
  useBreakpoint,
} from '@chakra-ui/react'
import Text from '../../components/Typography/Text'
import { CMSLogo, NeuroGleeLogo, DownArrowSVG } from 'icons/HeaderIcons'
import { useEffect, useState } from 'react'
import { useViewportSize } from '@mantine/hooks'

const Header: React.FC = () => {
  const [isSmallerThan1360] = useMediaQuery(`(max-width: 1400px)`)
  const [sideMenuWidth, setSideMenuWidth] = useState('17vw')
  return (
    <Flex direction="row" alignItems="center" bgColor="#fff" borderBottom={'0.5px solid #E0E0E0'}>
      <Box padding="25px 30px" bgColor="#F1F1F1" width={`17vw`}>
        <HStack
          width={'100%'}
          height={'60px'}
          spacing={10}
          divider={<StackDivider borderColor="gray.300" borderEndWidth={1} />}
        >
          <Box minWidth={'100px'}>
            <NeuroGleeLogo />
          </Box>
          <Box minWidth={'40px'}>
            <CMSLogo width="100%" height="50px" />
          </Box>
        </HStack>
      </Box>
      <Flex justifyContent={'flex-end'} alignItems="center" width="83vw" height="100%" paddingRight={'70px'}>
        <HStack gap={5}>
          <Text fontSize={'16px'} color="#000">
            CMS admin name
          </Text>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<DownArrowSVG />}
              backgroundColor="#004187"
              color={'#fff'}
              width="50px"
              height="50px"
              borderRadius="100%"
              _hover={{
                backgroundColor: '#053463',
              }}
              _active={{
                backgroundColor: '#053463',
              }}
            />
            <MenuList zIndex={200} bgColor="#fff" boxShadow={' 0px 4px 4px rgba(0, 0, 0, 0.1)'} borderRadius="10px">
              <MenuItem p={6}>
                <Text>Account Settings</Text>
              </MenuItem>
              <MenuDivider borderColor={'gray.400'} />
              <MenuItem p={6}>
                <Text color="#37A2FE">Log Out</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Flex>
  )
}
export default Header
