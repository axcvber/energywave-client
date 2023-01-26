import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

interface IDropdownMenu {
  title: string
  icon?: JSX.Element
  menu?: any
  onTriggerClick?: () => void
  placement?: 'bottom-end' | 'bottom-start'
}

const DropdownMenu: React.FC<IDropdownMenu> = ({ title, icon, menu, onTriggerClick, placement }) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>()

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index)
  }

  return (
    <Menu placement='bottom-end' matchWidth>
      <MenuButton
        size='sm'
        p={2}
        h={9}
        fontSize={15}
        as={Button}
        leftIcon={icon}
        rightIcon={<FiChevronDown />}
        sx={{
          'svg': {
            fontSize: 18,
          },
        }}
      >
        {title}
      </MenuButton>
      <MenuList minW='auto' w='auto' p={2}>
        {menu.map((menuItem: any, inx: number) => (
          <MenuItem
            key={inx}
            sx={{
              width: '100%',
              bg: inx === selectedIndex ? 'brand.500' : 'initial',
              color: inx === selectedIndex ? 'white' : 'gray.700',
              padding: '0',
              fontSize: 15,
              fontWeight: 400,
              borderRadius: 4,
              '&:not(:last-child)': {
                mb: 1.5,
              },
              '&:hover': {
                backgroundColor: inx === selectedIndex ? 'brand.500' : 'brand.50',
              },
            }}
          >
            {React.cloneElement(menuItem, {
              onClick: (event: React.MouseEvent<HTMLElement>) => {
                menuItem.props.onClick()
                handleMenuItemClick(event, inx)
              },
            })}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default DropdownMenu
