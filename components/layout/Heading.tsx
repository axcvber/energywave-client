import { Box, Heading as ChakraHeading, HeadingProps, Stack, StackProps } from '@chakra-ui/react'
import React from 'react'

interface IHeading {
  title: string
  withLine?: boolean
  align?: 'left' | 'center'
  headingProps?: HeadingProps
  stackProps?: StackProps
}

const Heading: React.FC<IHeading> = ({ title, align, withLine, headingProps, stackProps }) => {
  return (
    <Stack width='100%' spacing={3} alignItems={align === 'center' ? 'center' : 'flex-start'} {...stackProps}>
      <ChakraHeading fontWeight={600} size='lg' color='gray.900' {...headingProps}>
        {title}
      </ChakraHeading>
      {withLine && <Box width={12} height={1} bg='brand.500' borderRadius={'base'} />}
    </Stack>
  )
}

export default Heading
