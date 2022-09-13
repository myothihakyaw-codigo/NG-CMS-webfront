import { useRouter } from 'next/router'
import React, { RefObject, useRef } from 'react'
import { Box, Divider } from '@chakra-ui/react'
import Text from 'components/Typography/Text'
import Link from 'next/link'
import { IMenuItem } from './SideMenu.types'
import { useState, useEffect } from 'react'

interface Props extends IMenuItem {
  isActive: boolean
}

const MenuItem: React.FC<Props> = ({ name, route, isActive }) => {
  // Handling the class name toggle
  const sideMenuItemRef: RefObject<HTMLDivElement> = useRef(null)

  return (
    // FIX: it would be better to use with Fade component in Chakra UI for toggle nav pointer
    <Box
      ref={sideMenuItemRef}
      position={'relative'}
      borderBottom={'1px solid #515151'}
      _after={{
        content: `''`,
        display: 'block',
        paddingBottom: '1.8px',
        borderBottom: '1.8px solid #000',
      }}
      marginBottom={'-1px'}
      width="100%"
    >
      <Box
        transition="all 0.1s linear"
        width={isActive ? '17px' : '0px'}
        height={'100%'}
        bgColor="#fbb738"
        position={'absolute'}
        left="0"
        top={0}
        zIndex={300}
      />
      <Link href={route}>
        <Box padding="25px 35px">
          {' '}
          <Text color="white">{name}</Text>{' '}
        </Box>
      </Link>
    </Box>
  )
}

export default MenuItem
