import { Box, IconButton, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { decrementQuantity, incrementQuantity, IProduct, removeItem } from '../../store/slices/cartSlice'
import { useAppDispatch } from '../../store/hooks'
import QuantityCounter from './QuantityCounter'
import { MdClose } from 'react-icons/md'
import Price from '../Price'

interface ICartItem {
  item: IProduct
}

const CartItem: React.FC<ICartItem> = ({ item }) => {
  const dispatch = useAppDispatch()

  const onIncrementQuantity = () => {
    dispatch(incrementQuantity(item.id))
  }

  const onDecrementQuantity = () => {
    dispatch(decrementQuantity(item.id))
  }

  const onRemoveItem = () => {
    dispatch(removeItem(item.id))
  }

  return (
    <Box as='li' p={3} borderRadius='lg' boxShadow={'xs'} bg='white'>
      <Stack direction={'row'} spacing={4}>
        <Link href={`/catalog/${item.slug}`} passHref legacyBehavior>
          <Box as='a' minWidth={'80px'}>
            <Image
              alt={item.image?.alternativeText || ''}
              src={item.image?.url || ''}
              placeholder='blur'
              blurDataURL={item.image?.url || ''}
              width={80}
              height={80}
            />
          </Box>
        </Link>

        <Stack spacing={0} flex={1}>
          <Stack spacing={2} direction={'row'} justifyContent='space-between' alignItems={'flex-start'}>
            <Link href={`/catalog/${item.slug}`} passHref legacyBehavior>
              <Text as='a' fontSize={'lg'} fontWeight={600} color='gray.900' _hover={{ textDecoration: 'underline' }}>
                {item.name}
              </Text>
            </Link>
            <IconButton
              size='xs'
              aria-label='Search database'
              icon={<MdClose fontSize={16} />}
              colorScheme='red'
              variant={'ghost'}
              onClick={onRemoveItem}
            />
          </Stack>

          <Stack
            direction={'row'}
            spacing={4}
            alignItems={'flex-end'}
            justifyContent={{ base: 'space-between', sm: 'space-between' }}
          >
            <Price price={item.price} />

            <QuantityCounter
              quantity={item.quantity}
              inStock={item.inStock}
              onDecrement={onDecrementQuantity}
              onIncrement={onIncrementQuantity}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default CartItem
