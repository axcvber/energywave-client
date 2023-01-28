import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ComponentProductPrice } from '../generated'
import { numberWithSpaces } from '../utils/numberWithSpaces'

interface IPrice {
  price: ComponentProductPrice
  size?: 'medium' | 'large'
}

const Price: React.FC<IPrice> = ({ price, size = 'medium' }) => {
  const today = new Date()
  const discountStartDate = new Date(price.discountStartDate)
  const discountEndDate = new Date(price.discountEndDate)
  const showDiscount = today >= discountStartDate && today < discountEndDate
  return (
    <Stack lineHeight={1.3}>
      <Text
        as='span'
        color={showDiscount ? 'red.400' : 'gray.900'}
        fontSize={size === 'medium' ? 'xl' : '2xl'}
        fontWeight={600}
      >
        {numberWithSpaces(price.price)}{' '}
        <Text
          as='span'
          fontSize={size === 'medium' ? 'xl' : '2xl'}
          color={showDiscount ? 'red.400' : 'gray.800'}
          fontWeight={500}
        >
          ₴
        </Text>
      </Text>
      {price.discountPrice && showDiscount && (
        <Text
          as='span'
          color='gray.300'
          fontSize={size === 'medium' ? 'sm' : 'md'}
          fontWeight={500}
          textDecoration='line-through'
        >
          {numberWithSpaces(price.discountPrice)} ₴
        </Text>
      )}
    </Stack>
  )
}

export default Price
