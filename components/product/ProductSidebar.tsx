import { Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React, { ReactNode, useEffect, useState } from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { HiShieldCheck } from 'react-icons/hi'
import { Maybe, ProductEntity, UploadFile } from '../../generated'
import { ProductStatus } from '../../interfaces/ProductStatus'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  addToCart,
  checkItemInCart,
  decrementQuantity,
  getItemQuantity,
  incrementQuantity,
} from '../../store/slices/cartSlice'
import { showModal } from '../../store/slices/modalSlice'
import QuantityCounter from '../cart/QuantityCounter'
import Paper from '../layout/Paper'
import { MODAL_TYPES } from '../modals/ModalWrapper'
import PreviewOptions from '../PreviewOptions'
import Price from '../Price'
import StatusBadge from '../StatusBadge'

interface IProductSidebar {
  item: ProductEntity
}

const ProductSidebar: React.FC<IProductSidebar> = ({ item }) => {
  const dispatch = useAppDispatch()
  const isItemInCart = useAppSelector(checkItemInCart(item.id as string))
  const itemQuantity = useAppSelector(getItemQuantity(item.id as string))

  const [quantity, setQuantity] = useState(itemQuantity)

  useEffect(() => {
    setQuantity(itemQuantity)
  }, [itemQuantity])

  const onIncrementQuantity = () => {
    if (isItemInCart) {
      dispatch(incrementQuantity(item.id as string))
    }
    if (quantity < item.attributes!.inStock) {
      setQuantity(quantity + 1)
    }
  }

  const onDecrementQuantity = () => {
    if (isItemInCart) {
      dispatch(decrementQuantity(item.id as string))
    }

    if (quantity === 1) {
      setQuantity(1)
    } else {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {
    if (!isItemInCart && (item.attributes?.slug as string) !== ProductStatus.EXPIRED) {
      dispatch(
        addToCart({
          id: item.id as string,
          name: item.attributes!.name,
          image: item.attributes?.image.data?.attributes as Maybe<UploadFile>,
          price: item.attributes!.price,
          slug: item.attributes!.slug,
          inStock: item.attributes!.inStock,
          quantity,
        })
      )
    }
    dispatch(
      showModal({
        modalType: MODAL_TYPES.CART_MODAL,
      })
    )
  }

  return (
    <Stack spacing={3}>
      <Paper>
        <Stack spacing={3}>
          <Heading size='lg' fontWeight={600} color='gray.900'>
            {item.attributes!.name}
          </Heading>
          <div>
            <StatusBadge status={item.attributes!.status} />
          </div>
          <HStack justifyContent={'space-between'} alignItems='flex-start'>
            <Price price={item.attributes!.price} />
            <QuantityCounter
              quantity={quantity}
              inStock={item.attributes!.inStock}
              onDecrement={onDecrementQuantity}
              onIncrement={onIncrementQuantity}
            />
          </HStack>
          <PreviewOptions data={item.attributes!.previewOptions} />

          <Button
            disabled={(item.attributes!.status as string) === ProductStatus.EXPIRED}
            variant={isItemInCart ? 'outline' : 'solid'}
            size='lg'
            leftIcon={<FiShoppingCart fontSize={20} />}
            onClick={handleAddToCart}
          >
            {isItemInCart ? 'В кошику' : 'Купити'}
          </Button>
        </Stack>
      </Paper>

      <SidebarLabel title='Гарантія' text='Офіційна гарантія виробника: 12 місяців' icon={<HiShieldCheck />} />
      <SidebarLabel title='Доставка' text='Новою Поштою по всій Україні' icon={<FaShippingFast />} />
    </Stack>
  )
}

interface ISidebarLabel {
  title: string
  text: string
  icon: ReactNode
}

const SidebarLabel: React.FC<ISidebarLabel> = ({ title, text, icon }) => {
  return (
    <Paper py={4} px={4}>
      <HStack spacing={3} alignItems='flex-start'>
        <Box
          bg='brand.50'
          p={2}
          border={'1px solid'}
          borderColor='brand.100'
          borderRadius={'full'}
          sx={{
            'svg': {
              color: 'brand.400',
              fontSize: 22,
            },
          }}
        >
          {icon}
        </Box>

        <Stack>
          <Text color='brand.400' fontSize={'md'} fontWeight={600} lineHeight={1.3}>
            {title}
          </Text>
          <Text fontSize={'sm'}>{text}</Text>
        </Stack>
      </HStack>
    </Paper>
  )
}

export default ProductSidebar
