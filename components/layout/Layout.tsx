import React, { ReactNode } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Box } from '@chakra-ui/react'
import ModalWrapper from '../modals/ModalWrapper'
import { useRouter } from 'next/router'
import HomeNavbar from '../navbar/HomeNavbar'
import GlobalSeo from '../seo/GlobalSeo'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return (
    <>
      <GlobalSeo />
      <ModalWrapper>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {isHomePage ? <HomeNavbar /> : <Navbar />}
          <Box as='main' mt={isHomePage ? '0px' : '30px'} mb='60px' position={'relative'}>
            {children}
          </Box>
          <Footer />
        </Box>
      </ModalWrapper>
    </>
  )
}

export default Layout
