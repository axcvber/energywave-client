import { Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'

interface INumberedHeading extends HeadingProps {
  title: string
}

const NumberedHeading: React.FC<INumberedHeading> = ({ title, ...props }) => {
  return (
    <Heading
      size={'md'}
      fontWeight={600}
      {...props}
      sx={{
        whiteSpace: 'nowrap',
        '&:before': {
          counterIncrement: 'section',
          content: `counter(section) '.'`,
          marginRight: '5px',
          color: 'brand.500',
        },
      }}
    >
      {title}
    </Heading>
  )
}

export default NumberedHeading
