import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ComponentProductPrice } from '../generated'
import { numberWithSpaces } from '../utils/numberWithSpaces'

interface IPrice {
  price: ComponentProductPrice
  direction?: 'column' | 'row'
}

const Price: React.FC<IPrice> = ({ price, direction = 'column' }) => {
  const today = new Date()
  const discountStartDate = new Date(price.discountStartDate)
  const discountEndDate = new Date(price.discountEndDate)
  const showDiscount = today >= discountStartDate && today < discountEndDate
  return (
    <Stack
      // columnGap={2}
      // direction={direction}
      lineHeight={1.3}
      // alignItems={direction === 'row' ? 'center' : 'flex-start'}
    >
      {/* <Text as='span' fontSize={'2xl'} fontWeight={600} color='green.400'>
        {numberWithSpaces(price.price)} ₴
       </Text> */}

      <Text as='span' color='red.400' fontSize='xl' fontWeight={600}>
        {numberWithSpaces(price.price)}{' '}
        <Text as='span' fontSize='xl' color='red.400' fontWeight={500}>
          ₴
        </Text>
      </Text>
      {price.discountPrice && showDiscount && (
        <Text as='span' color='gray.300' fontSize='sm' fontWeight={500} textDecoration='line-through'>
          {numberWithSpaces(price.discountPrice)} ₴
        </Text>
      )}
    </Stack>
  )
}

export default Price
