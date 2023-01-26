import React, { ReactNode, useEffect, useState } from 'react'
import { Box, Button, Container, HStack, IconButton, List, ListItem, Stack, Text, VStack } from '@chakra-ui/react'
import Logo from '../Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SocialIcons from '../SocialIcons'
import useScrollDirection from '../../hooks/useScrollDirection'
import { FiShoppingCart } from 'react-icons/fi'
import CartIcon from './CartIcon'

export const navLinks = [
  {
    path: '/',
    label: 'Головна',
  },
  {
    path: '/catalog',
    label: 'Каталог',
  },
  {
    path: '/about-us',
    label: 'Про нас',
  },
  {
    path: '/contacts',
    label: 'Контакти',
  },
]

const Navbar = () => {
  const router = useRouter()
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false)
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const isScrolledNav = scrollDirection === 'up' && !scrolledToTop

  // const handleScroll = () => {
  //   setScrolledToTop(window.pageYOffset < 70)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <Header scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <Container as='nav' h='100%' display='flex' justifyContent={'space-between'} alignItems={'center'}>
        <HStack spacing={6}>
          <Logo placement={isScrolledNav ? 'footer' : 'header'} />
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
        </HStack>

        <HStack spacing={6}>
          <Box display={{ base: 'none', md: 'block' }}>
            <SocialIcons />
          </Box>

          <VStack display={{ base: 'none', sm: 'flex' }} spacing={-0.5} alignItems='flex-end'>
            <Text fontSize={'md'} fontWeight={600}>
              +38 (093) 052 57 02
            </Text>
            <Text
              fontSize={'sm'}
              color={'brand.300'}
              fontWeight={600}
              sx={
                {
                  // letterSpacing: '0.8px',
                }
              }
              textDecoration='underline'
            >
              Зворотний дзвінок
            </Text>
          </VStack>

          <CartIcon />

          {/* <Button
            // bgGradient='linear(to-r, teal.500, green.500)'
            ml={{ base: 2, sm: 0 }}
            // leftIcon={<RiContactsBook2Fill fontSize={20} />}
            colorScheme={'green'}
          >
            Зворотний Дзвінок
          </Button> */}

          {/* <Box display={{ base: 'block', lg: 'none' }}>
          <IconButton
            variant={'outline'}
            aria-label='Open Menu'
            colorScheme={stickyNav ? 'gray' : 'brand'}
            borderColor={stickyNav ? '#fff' : 'brand.500'}
            onClick={() => setOpenMenu(true)}
            icon={<FiMenu fontSize={20} />}
          />
          <MobileMenu isOpen={isOpenMenu} onClose={() => setOpenMenu(false)} />
        </Box> */}
        </HStack>
      </Container>
    </Header>
  )
}

interface HeaderProps {
  scrollDirection: any
  scrolledToTop: boolean
  children: ReactNode
}

interface INavLink {
  isActive: boolean
  isScrolledNav: boolean
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
            bg: 'green.500',
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

const Header: React.FC<HeaderProps> = ({ scrollDirection, scrolledToTop, children }) => {
  return (
    <Box
      as='header'
      sx={{
        // width: '100%',
        // position: 'fixed',
        // top: 0,
        // left: 0,
        zIndex: 999,
        height: '70px',
        borderBottom: `1px solid transparent`,
        borderColor: '#E5E5E9',
        background: '#fff',
        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
        ...(scrollDirection === 'up' &&
          !scrolledToTop && {
            boxShadow: 'sm',
            borderColor: '#E5E5E9',
            backgroundColor: '#fff',
            height: '75px',
          }),

        ...(scrollDirection === 'down' &&
          !scrolledToTop && {
            transform: 'translateY(-76px)',
          }),
      }}
    >
      {children}
    </Box>
  )
}

export default Navbar
