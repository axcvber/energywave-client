import { Box, IconButton, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { FiShoppingCart } from 'react-icons/fi'
import Image from 'next/image'
import { numberWithSpaces } from '../../utils/numberWithSpaces'
import { showModal } from '../../store/slices/modalSlice'
import { MODAL_TYPES } from '../modals/ModalWrapper'

const CartIcon = () => {
  const { cartItems } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const totalQuantity = Object.values(cartItems).reduce((sum, cur) => (sum += cur.quantity), 0)

  // const totalPrice = Object.values(cartItems).reduce((sum, cur) => {
  //   const { name, quantity} = cur;
  //   return sum += cartItems?.find(p => p.name === name)?.price?.price * quantity;
  // }, 0);

  const onOpenCartModal = () => {
    dispatch(
      showModal({
        modalType: MODAL_TYPES.CART_MODAL,
      })
    )
  }

  return (
    <React.Fragment>
      <Box position='relative'>
        <IconButton
          size={'sm'}
          variant={'ghost'}
          aria-label='Search database'
          icon={<FiShoppingCart fontSize={20} />}
          onClick={onOpenCartModal}
        />
        {totalQuantity > 0 && (
          <Stack
            justifyContent={'center'}
            alignItems='center'
            position={'absolute'}
            top={-1}
            right={-1}
            bg={'red.500'}
            p={2}
            width={2}
            height={2}
            borderRadius='full'
            color='#fff'
          >
            <Text fontSize={'xs'}>{totalQuantity}</Text>
          </Stack>
        )}
      </Box>
    </React.Fragment>
  )
}

export default CartIcon
