import { Button, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Modal from '.'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { hideModal } from '../../store/slices/modalSlice'
import { numberWithSpaces } from '../../utils/numberWithSpaces'
import Link from 'next/link'
import CartList from '../cart/CartList'
import { RiDeleteBinLine } from 'react-icons/ri'
import { morph } from '../../utils/morph'
import { getTotalAmount, getTotalQuantity, resetCart } from '../../store/slices/cartSlice'
import { useRouter } from 'next/router'

const CartModal = () => {
  const { isOpen } = useAppSelector((state) => state.modal)
  const { cartItems } = useAppSelector((state) => state.cart)
  const totalQuantity = useAppSelector(getTotalQuantity)
  const totalAmount = useAppSelector(getTotalAmount)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const isCartEmpty = cartItems.length === 0

  const resultText = ['товар', 'товара', 'товарів']

  const onHideModal = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (router.pathname === '/checkout') {
      e?.preventDefault()
    }
    dispatch(hideModal())
  }

  const onRemoveItems = () => {
    const conf = confirm(`Ви впевнені?`)
    if (conf) {
      onHideModal()
      setTimeout(() => {
        dispatch(resetCart())
      }, 80)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onHideModal} title={'Кошик'}>
      {!isCartEmpty && (
        <Stack direction={'row'} justifyContent='space-between' alignItems={'center'}>
          <Text as='span' fontSize='sm' fontWeight={500} color='gray.900'>
            {totalQuantity} {morph(totalQuantity, resultText)}
          </Text>
          <HStack
            onClick={onRemoveItems}
            spacing={1}
            color='red.400'
            alignItems={'center'}
            cursor='pointer'
            _hover={{ color: 'red.500' }}
            transition={'color 0.1s linear'}
          >
            <RiDeleteBinLine />
            <Text as='span' fontSize='sm' fontWeight={500}>
              Видалити все
            </Text>
          </HStack>
        </Stack>
      )}

      <Stack my={4}>
        <CartList />
      </Stack>

      {!isCartEmpty && (
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          spacing={4}
          justifyContent='space-between'
          alignItems={{ base: 'initial', sm: 'center' }}
        >
          <Stack>
            <Text as='span' fontWeight={500} color='gray.900'>
              Сума замовлення:
            </Text>
            <Text as='span' fontSize={'2xl'} fontWeight={600} color='brand.500'>
              {numberWithSpaces(totalAmount)} ₴
            </Text>
          </Stack>
          <Link href={'/checkout'} passHref legacyBehavior>
            <Button as='a' size={'lg'} onClick={(e) => onHideModal(e)}>
              Оформити замовлення
            </Button>
          </Link>
        </Stack>
      )}
    </Modal>
  )
}

export default CartModal
