import Text from 'components/Typography/Text'

import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

interface IProps {
  menuItems?: Array<React.ReactNode>
  status: string
  deleteAction: () => void
  editRoute: string
}

const DropDownMenu: React.FC<IProps> = ({ status, deleteAction, editRoute }) => {
  return (
    <Menu>
      <MenuButton as={Button}>
        <Text>...</Text>
      </MenuButton>
      <MenuList
        boxShadow={' 0px 4px 4px rgba(0, 0, 0, 0.1)'}
        borderRadius="10px"
        padding={'10px 0px'}
        width="160px"
        zIndex={200}
        bgColor="#fff"
      >
        <MenuItem padding="10px 15px">Edit</MenuItem>
        <MenuDivider borderColor={'gray.300'} />
        <MenuItem padding="10px 15px">Set as {status === 'active' ? 'inactive' : 'active'}</MenuItem>
        <MenuDivider borderColor={'gray.300'} />
        <MenuItem padding="10px 15px" onClick={() => deleteAction()}>
          <Text color={'#FF0000'}>Delete</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default DropDownMenu
