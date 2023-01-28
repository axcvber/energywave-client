import { HStack, IconButton, Skeleton, Stack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useGetSimilarProductsQuery } from '../../generated'
import ProductCard from '../cards/ProductCard'
import { Navigation } from 'swiper'
import Heading from '../layout/Heading'

interface ISimilarProducts {
  productId: string
}

const SimilarProducts: React.FC<ISimilarProducts> = ({ productId }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const { data, loading, error } = useGetSimilarProductsQuery({
    variables: {
      id: productId,
    },
  })

  if (data?.products?.data[0].attributes?.similars?.data.length === 0 || error) {
    return null
  }
  return (
    <Stack width={'100%'} spacing={4} mt={10}>
      <HStack justifyContent={'space-between'} px={2}>
        <Heading title={'Подібні товари'} withLine />

        <Stack direction='row' alignItems='center' spacing={1}>
          <IconButton ref={prevRef} aria-label='prev' size='sm' icon={<FiChevronLeft fontSize={20} />} />

          <IconButton ref={nextRef} aria-label='next' size='sm' icon={<FiChevronRight fontSize={20} />} />
        </Stack>
      </HStack>

      <Swiper
        wrapperTag='ul'
        observer
        style={{ width: '100%', padding: '10px 5px' }}
        spaceBetween={20}
        slidesPerView={4}
        autoHeight
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {loading
          ? Array(4)
              .fill(0)
              .map((_, inx: number) => (
                <SwiperSlide key={inx} tag='li'>
                  <Skeleton
                    width={'100%'}
                    height={470}
                    startColor='gray.50'
                    endColor='gray.200'
                    borderRadius={'xl'}
                    boxShadow={'base'}
                    border='1px solid'
                    borderColor='gray.100'
                  />
                </SwiperSlide>
              ))
          : data?.products!.data[0].attributes!.similars!.data.map((item: any) => (
              <SwiperSlide key={item.id}>
                <ProductCard item={item} />
              </SwiperSlide>
            ))}
      </Swiper>
    </Stack>
  )
}

export default SimilarProducts
