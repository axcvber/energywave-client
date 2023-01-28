import React from 'react'
import { Box, Container, HStack } from '@chakra-ui/react'
import Logo from '../Logo'
import SocialIcons from '../SocialIcons'
import CartIcon from './CartIcon'
import NavMenu from './NavMenu'
import ContactNumber from './ContactNumber'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <>
      <Box
        as='header'
        sx={{
          width: '100%',
          position: 'fixed',
          bg: 'white',
          top: 0,
          left: 0,
          zIndex: 999,
          height: '70px',
          borderBottom: `1px solid transparent`,
          borderColor: 'gray.100',
        }}
      >
        <Container as='nav' h='100%' display='flex' justifyContent={'space-between'} alignItems={'center'}>
          <HStack spacing={6}>
            <Logo placement={'header'} />
            <NavMenu />
          </HStack>

          <HStack spacing={{ base: 3, lg: 4 }}>
            <Box display={{ base: 'none', lg: 'block' }}>
              <SocialIcons />
            </Box>

            <Box display={{ base: 'none', sm: 'block' }}>
              <ContactNumber />
            </Box>

            <CartIcon />

            <Box display={{ base: 'block', lg: 'none' }}>
              <MobileMenu />
            </Box>
          </HStack>
        </Container>
      </Box>
      <Box mt={'70px'} />
    </>
  )
}

export default Navbar
