import { Box, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useAppSelector } from '../../store/hooks'
import CartItem from './CartItem'

const CartList = () => {
  const { cartItems } = useAppSelector((state) => state.cart)
  if (cartItems.length === 0) {
    return (
      <Stack justifyContent={'center'} alignItems='center'>
        <Box>
          <Image priority width={250} height={150} src={'/empty.svg'} alt='empty-cart' />
        </Box>
        <Text as='span' fontSize={'lg'} fontWeight={500} color='gray.500'>
          Ваш кошик порожній
        </Text>
      </Stack>
    )
  }

  return (
    <Stack as='ul' spacing={4}>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </Stack>
  )
}

export default CartList
