import React from 'react'
import { Box } from '@chakra-ui/react'
import Text from '../../components/Text/index'
import MenuItem from './MenuItem'
import { sideMenuRoutes } from './SideMenu.routes'
import { IMenuItem } from './SideMenu.types'
import { useState } from 'react'

/**
 * INFO: This is the main component for SideMen
 */

const SideMenu: React.FunctionComponent = () => {
  // * Might need to add some logic here!
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(0)
  return (
    <Box width="17vw" backgroundColor="#373737" height="100vh" zIndex={100}>
      {sideMenuRoutes.map((item, idx) => (
        <Box width={'inherit'} key={idx} onClick={() => setActiveMenuItemIndex(idx)}>
          <MenuItem isActive={idx === activeMenuItemIndex ? true : false} name={item.name} route={item.route} />
        </Box>
      ))}
    </Box>
  )
}

export default SideMenu
