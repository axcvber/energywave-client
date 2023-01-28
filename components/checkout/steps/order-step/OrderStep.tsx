import { Button, Divider, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import Paper from '../../../layout/Paper'
import OderItem from './OderItem'
import { BiEdit } from 'react-icons/bi'
import { showModal } from '../../../../store/slices/modalSlice'
import { MODAL_TYPES } from '../../../modals/ModalWrapper'
import NumberedHeading from '../../../layout/NumberedHeading'
import SkeletonOrderItem from './SkeletonOrderItem'

const OrderStep = () => {
  const { cartItems } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const onOpenCartModal = () => {
    dispatch(
      showModal({
        modalType: MODAL_TYPES.CART_MODAL,
      })
    )
  }
  return (
    <Paper as='section'>
      <HStack justifyContent={'space-between'} mb={4}>
        <NumberedHeading title='Замовлення' />

        <Button
          onClick={onOpenCartModal}
          size='sm'
          variant='link'
          leftIcon={<BiEdit />}
          fontWeight={500}
          sx={{
            'span': {
              marginRight: 1,
            },
            'svg': {
              fontSize: 18,
              marginTop: '2px',
            },
          }}
        >
          Редагувати
        </Button>
      </HStack>
      <Stack as='ul' spacing={4} mb={4}>
        {!cartItems.length ? (
          <SkeletonOrderItem />
        ) : (
          cartItems.map((item, inx) => (
            <React.Fragment key={item.id}>
              <OderItem item={item} />
              {cartItems.length - 1 !== inx && <Divider />}
            </React.Fragment>
          ))
        )}
      </Stack>
    </Paper>
  )
}

export default OrderStep
