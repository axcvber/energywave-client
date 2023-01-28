import React, { ReactNode, useEffect, useState } from 'react'
import { Box, Container, HStack } from '@chakra-ui/react'
import Logo from '../Logo'
import SocialIcons from '../SocialIcons'
import useScrollDirection from '../../hooks/useScrollDirection'
import CartIcon from './CartIcon'
import MobileMenu from './MobileMenu'
import ContactNumber from './ContactNumber'
import NavMenu from './NavMenu'

const HomeNavbar = () => {
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const isScrolledNav = scrollDirection === 'up' && !scrolledToTop

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 70)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Header scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <Container as='nav' h='100%' display='flex' justifyContent={'space-between'} alignItems={'center'}>
        <HStack spacing={6}>
          <Logo placement={isScrolledNav ? 'header' : 'footer'} />
          <NavMenu isScrolledNav={isScrolledNav} />
        </HStack>

        <HStack spacing={{ base: 3, lg: 4 }}>
          <Box display={{ base: 'none', lg: 'block' }}>
            <SocialIcons />
          </Box>

          <Box display={{ base: 'none', sm: 'block' }}>
            <ContactNumber isScrolledNav={isScrolledNav} />
          </Box>

          <CartIcon isScrolledNav={isScrolledNav} />

          <Box display={{ base: 'block', lg: 'none' }}>
            <MobileMenu isScrolledNav={isScrolledNav} />
          </Box>
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

const Header: React.FC<HeaderProps> = ({ scrollDirection, scrolledToTop, children }) => {
  return (
    <Box
      as='header'
      sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
        height: '85px',
        borderBottom: `1px solid transparent`,
        background: 'transparent',
        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
        ...(scrollDirection === 'up' &&
          !scrolledToTop && {
            boxShadow: 'sm',
            borderColor: 'gray.100',
            backgroundColor: '#fff',
            height: '70px',
          }),

        ...(scrollDirection === 'down' &&
          !scrolledToTop && {
            transition: 'all 0.1s ease',
            transform: 'translateY(-70px)',
          }),
      }}
    >
      {children}
    </Box>
  )
}

export default HomeNavbar
