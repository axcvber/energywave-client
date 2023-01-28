import { Box, List, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { navLinks } from './navLinks'

const NavMenu: React.FC<{ isScrolledNav?: boolean }> = ({ isScrolledNav = true }) => {
  const router = useRouter()

  return (
    <List
      columnGap={5}
      mx={4}
      py={4}
      display={{ base: 'none', lg: 'flex' }}
      alignItems={'center'}
      flexWrap='wrap'
      justifyContent={'center'}
    >
      {navLinks.map((item) => (
        <ListItem key={item.path}>
          <NavLink
            path={item.path}
            label={item.label}
            isActive={router.pathname === item.path}
            isScrolledNav={isScrolledNav}
          />
        </ListItem>
      ))}
    </List>
  )
}

interface INavLink {
  isActive: boolean
  isScrolledNav?: boolean
  label: string
  path: string
}

const NavLink: React.FC<INavLink> = ({ isActive, isScrolledNav, label, path }) => {
  return (
    <Link href={path} passHref legacyBehavior>
      <Box
        as='a'
        sx={{
          position: 'relative',
          userSelect: 'none',
          fontWeight: 500,
          color: 'gray.500',
          transition: 'all 0.2s linear',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '5px',
            height: '5px',
            borderRadius: '50px',
            bottom: '-12px',
            left: '50%',
            pointerEvents: 'none',
            transform: 'translateX(-50%) scale(0)',
            transition: 'all 0.2s linear',
            bg: 'brand.500',
          },
          '&:hover, &.active': {
            color: isScrolledNav ? 'gray.900' : 'gray.50',

            '&::after': {
              transform: 'translateX(-50%) scale(1.5)',
            },
          },
        }}
        className={isActive ? 'active' : ''}
      >
        {label}
      </Box>
    </Link>
  )
}

export default NavMenu
