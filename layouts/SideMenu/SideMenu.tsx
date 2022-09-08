import React from 'react'
import { Box } from '@chakra-ui/react'
import Text from 'components/Typography/Text'
import MenuItem from './MenuItem'
import { sideMenuRoutes } from './SideMenu.routes'
import { IMenuItem } from './SideMenu.types'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

/**
 * INFO: This is the main component for SideMen
 */

const SideMenu: React.FunctionComponent = () => {
  // * Might need to add some logic here!
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(0)
  const [currentRoute, setCurrentRoute] = useState('')
  const router = useRouter()
  useEffect(() => {
    setCurrentRoute(router.asPath)
    setActiveMenuItemIndex(-1)
  }, [router.asPath])
  return (
    <Box width="17vw" backgroundColor="#373737" height="100vh" zIndex={100}>
      {sideMenuRoutes.map((item, idx) => (
        <Box width={'inherit'} key={idx} onClick={() => setActiveMenuItemIndex(idx)}>
          <MenuItem
            isActive={idx === activeMenuItemIndex || currentRoute === item?.route ? true : false}
            name={item.name}
            route={item.route}
          />
        </Box>
      ))}
    </Box>
  )
}

export default SideMenu
