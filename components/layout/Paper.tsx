import { Box, BoxProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface IPaper extends BoxProps {
  children: ReactNode
}

const Paper: React.FC<IPaper> = ({ children, ...props }) => {
  return (
    <Box boxShadow='sm' overflow={'hidden'} borderRadius={'md'} p={5} bg='white' {...props}>
      {children}
    </Box>
  )
}

export default Paper
