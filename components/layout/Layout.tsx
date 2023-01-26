import React, { ReactNode } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Box } from '@chakra-ui/react'
import ModalWrapper from '../modals/ModalWrapper'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <ModalWrapper>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // overflowX: 'hidden',
        }}
      >
        <Navbar />
        <Box as='main' mt='30px' mb='60px' position={'relative'}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ModalWrapper>
  )
}

export default Layout
