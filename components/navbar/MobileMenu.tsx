import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  List,
  ListItem,
  Stack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri'
import SocialIcons from '../SocialIcons'
import ContactNumber from './ContactNumber'
import { navLinks } from './navLinks'

const MobileMenu: React.FC<{ isScrolledNav?: boolean }> = ({ isScrolledNav = true }) => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false)
  const router = useRouter()

  const onOpenMenu = () => {
    setOpenMenu(true)
  }

  const onCloseMenu = () => {
    setOpenMenu(false)
  }

  return (
    <>
      <IconButton
        size={'sm'}
        variant={'ghost'}
        aria-label='Open Menu'
        _hover={{
          bg: isScrolledNav ? 'brand.50' : 'brand.900',
        }}
        _active={{
          bg: isScrolledNav ? 'brand.50' : 'brand.900',
        }}
        onClick={onOpenMenu}
        icon={<RiMenu3Fill fontSize={25} />}
      />

      <Drawer isOpen={isOpenMenu} isFullHeight onClose={onCloseMenu} size={'full'}>
        <DrawerOverlay />
        <DrawerContent bg='brand.900'>
          <HStack alignItems={'flex-start'} justifyContent={'space-between'} px={6} py={4}>
            <IconButton
              size={'sm'}
              aria-label='Close menu'
              icon={<RiCloseFill fontSize={34} />}
              variant='ghost'
              onClick={onCloseMenu}
            />
            <Stack spacing={3}>
              <Box display={{ base: 'block', sm: 'none' }}>
                <ContactNumber isScrolledNav={false} />
              </Box>
            </Stack>
          </HStack>
          <DrawerBody as={Stack} justifyContent='center' alignItems='center' spacing={8}>
            <List
              spacing={8}
              fontSize='2xl'
              display={'flex'}
              flexDirection='column'
              // width='100%'
              // height={'100%'}
              alignItems={'center'}
              justifyContent='center'
            >
              {navLinks.map((item) => {
                return (
                  <ListItem key={item.path} onClick={onCloseMenu}>
                    <Link href={item.path} passHref>
                      <Box
                        sx={{
                          display: 'block',
                          position: 'relative',
                          color: router.pathname === item.path ? 'brand.500' : 'gray.100',
                          fontWeight: 500,
                        }}
                        as='a'
                        _before={{
                          content: '""',
                          position: 'absolute',
                          width: '7px',
                          height: '7px',
                          borderRadius: '50px',
                          top: '50%',
                          left: '-20px',
                          pointerEvents: 'none',
                          transform:
                            router.pathname === item.path ? 'translateY(-50%) scale(1.5)' : 'translateY(-50%) scale(0)',
                          transition: 'all 0.2s linear',
                          bg: 'brand.500',
                        }}
                      >
                        {item.label}
                      </Box>
                    </Link>
                  </ListItem>
                )
              })}
            </List>
            <SocialIcons />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileMenu
