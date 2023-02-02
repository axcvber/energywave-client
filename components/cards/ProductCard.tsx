import { Box, Button, Divider, Heading, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'
import { Maybe, ProductEntity, UploadFile } from '../../generated'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addToCart, checkItemInCart } from '../../store/slices/cartSlice'
import { showModal } from '../../store/slices/modalSlice'
import { MODAL_TYPES } from '../modals/ModalWrapper'
import Price from '../Price'
import PreviewOptions from '../PreviewOptions'
import { ProductStatus } from '../../interfaces/ProductStatus'
import StatusBadge from '../StatusBadge'
import Paper from '../layout/Paper'

interface IProductCard {
  item: ProductEntity
}

const ProductCard: React.FC<IProductCard> = ({ item }) => {
  const isItemInCart = useAppSelector(checkItemInCart(item.id as string))
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    if (!isItemInCart && (item.attributes!.status as string) !== ProductStatus.EXPIRED) {
      dispatch(
        addToCart({
          id: item.id as string,
          name: item.attributes!.name,
          image: item.attributes?.image.data?.attributes as Maybe<UploadFile>,
          price: item.attributes!.price,
          slug: item.attributes!.slug,
          inStock: item.attributes!.inStock,
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
    <Paper p={1} boxShadow='md' borderRadius={'lg'}>
      <Link href={`/catalog/${item.attributes?.slug}`} passHref legacyBehavior>
        <Box as={'a'} display='block'>
          <Image
            priority
            width={280}
            height={280}
            src={item.attributes!.image.data!.attributes!.url}
            alt={item.attributes!.image.data!.attributes!.alternativeText || 'product'}
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Link>

      <Stack spacing={3} p={4}>
        <Link href={`/catalog/${item.attributes?.slug}`} passHref legacyBehavior>
          <Heading as='a' size='md' _hover={{ color: 'brand.400' }} transition={'color 0.1s linear'}>
            {item.attributes?.name}
          </Heading>
        </Link>
        <div>
          <StatusBadge status={item.attributes!.status} />
        </div>
        <Box px={1}>
          <PreviewOptions data={item.attributes!.previewOptions} />
        </Box>
        <Divider />
        <HStack width={'100%'} spacing={4} justifyContent={'space-between'}>
          <Price price={item.attributes!.price} />

          <Button
            disabled={(item.attributes!.status as string) === ProductStatus.EXPIRED}
            variant={isItemInCart ? 'outline' : 'solid'}
            leftIcon={<FiShoppingCart fontSize={18} />}
            onClick={handleAddToCart}
          >
            {isItemInCart ? 'В кошику' : 'Купити'}
          </Button>
        </HStack>
      </Stack>
    </Paper>
  )
}

export default ProductCard
