import { Box, IconButton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { FiShoppingCart } from 'react-icons/fi'
import { showModal } from '../../store/slices/modalSlice'
import { MODAL_TYPES } from '../modals/ModalWrapper'
import { getTotalQuantity } from '../../store/slices/cartSlice'

const CartIcon: React.FC<{ isScrolledNav?: boolean }> = ({ isScrolledNav = true }) => {
  const totalQuantity = useAppSelector(getTotalQuantity)
  const dispatch = useAppDispatch()

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
          aria-label='Open cart'
          icon={<FiShoppingCart fontSize={22} />}
          onClick={onOpenCartModal}
          _hover={{
            bg: isScrolledNav ? 'brand.50' : 'brand.900',
          }}
          _active={{
            bg: isScrolledNav ? 'brand.50' : 'brand.900',
          }}
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
            width={3}
            height={3}
            borderRadius='full'
            color='#fff'
          >
            <Text as='span' fontSize={'10px'}>
              {totalQuantity}
            </Text>
          </Stack>
        )}
      </Box>
    </React.Fragment>
  )
}

export default CartIcon
