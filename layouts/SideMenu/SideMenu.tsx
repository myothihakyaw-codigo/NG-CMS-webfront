import React from 'react'
import { Box } from '@chakra-ui/react'

import MenuItem from './MenuItem'
import { sideMenuRoutes } from './SideMenu.routes'

import useCheckActiveRoute from '../../hooks/useCheckActiveRoute'

/**
 *
 * * INFO: This is the main component for SideMenu
 */

const SideMenu: React.FunctionComponent = () => {
  const { activeRoute, setActiveRoute } = useCheckActiveRoute()
  return (
    <Box width="17vw" backgroundColor="#373737" height="100vh" zIndex={100}>
      {sideMenuRoutes.map((item, idx) => (
        <Box width={'inherit'} key={idx} onClick={() => setActiveRoute(item?.route)}>
          <MenuItem isActive={activeRoute === item?.route ? true : false} name={item.name} route={item.route} />
        </Box>
      ))}
    </Box>
  )
}

export default SideMenu
