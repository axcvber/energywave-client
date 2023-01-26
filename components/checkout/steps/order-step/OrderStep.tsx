import { Button, Divider, HStack, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import Paper from '../../../layout/Paper'
import OderItem from './OderItem'
import { BiEdit } from 'react-icons/bi'
import { showModal } from '../../../../store/slices/modalSlice'
import { MODAL_TYPES } from '../../../modals/ModalWrapper'
import NumberedHeading from '../../../layout/NumberedHeading'

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
          <Stack
            as='li'
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: 6, lg: 4 }}
            justifyContent='space-between'
          >
            <HStack spacing={5} flex={1.5}>
              <SkeletonCircle size='70px' startColor='gray.50' endColor='gray.100' />
              <SkeletonText flex={1} mt='4' orientation='vertical' noOfLines={2} spacing='3' skeletonHeight='3.5' />
            </HStack>
            <HStack spacing={5} flex={1}>
              <SkeletonText
                flex={1}
                display='flex'
                flexDirection={'column'}
                alignItems='center'
                color='red.100'
                orientation='vertical'
                noOfLines={2}
                spacing='3'
                skeletonHeight='3.5'
                textAlign={'center'}
              />
              <SkeletonText
                flex={1}
                display='flex'
                flexDirection={'column'}
                alignItems='center'
                color='red.100'
                orientation='vertical'
                noOfLines={2}
                spacing='3'
                skeletonHeight='3.5'
              />

              <SkeletonText
                flex={1}
                display='flex'
                flexDirection={'column'}
                alignItems='center'
                color='red.100'
                orientation='vertical'
                noOfLines={2}
                spacing='3'
                skeletonHeight='3.5'
              />
            </HStack>
          </Stack>
        ) : (
          // <Skeleton startColor='brand.50' endColor='brand.100' height='100px' borderRadius={5} />
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
