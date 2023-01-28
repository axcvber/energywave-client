import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Box, Grid, GridItem, IconButton, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { Swiper as ST } from 'swiper/types'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { UploadFileEntity } from '../../generated'
import Zoom from 'react-medium-image-zoom'
import Paper from '../layout/Paper'
import { FaRegImages } from 'react-icons/fa'

interface IGallerySlider {
  data: UploadFileEntity[]
}

const GallerySlider: React.FC<IGallerySlider> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [activeIndex, setActiveIndex] = useState(1)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <Grid templateColumns={{ base: '1fr', lg: '100px 1fr' }} gap={5} alignItems='flex-start'>
      <GridItem display={'grid'} order={{ base: 2, lg: 1 }} width='100%' height={{ base: 'auto', lg: '550px' }}>
        <Box
          as={Swiper}
          onSwiper={setThumbsSwiper}
          direction='vertical'
          spaceBetween={10}
          slidesPerView={4}
          observer
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={{
            0: {
              slidesPerView: 4,
              direction: 'horizontal',
            },
            992: {
              slidesPerView: 5,
              direction: 'vertical',
            },
          }}
          sx={{
            width: '100%',
            userSelect: 'none',
            '.smallSlideImage': {
              boxSizing: 'border-box',
              cursor: 'pointer',
              bg: 'white',
              maxWidth: '100px',
              maxHeight: '100px',
              position: 'relative',
              border: '1px solid',
              borderColor: 'gray.200',
              opacity: 0.3,
              borderRadius: 'md',
              overflow: 'hidden',
              '&.active': {
                opacity: 1,
                borderColor: 'brand.500',
              },
            },
          }}
        >
          {data.map((item, inx: number) => (
            <SwiperSlide key={item.id} className={`smallSlideImage ${inx + 1 === activeIndex ? 'active' : ''}`}>
              <Image
                width={100}
                height={100}
                sizes='100vw'
                src={item.attributes?.url || ''}
                placeholder='blur'
                blurDataURL={item.attributes?.url || ''}
                alt={item.attributes?.alternativeText || ''}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </SwiperSlide>
          ))}
        </Box>
      </GridItem>

      <Paper as={GridItem} overflow='hidden' p={0} width={'100%'} display={'grid'} order={{ base: 1, lg: 2 }}>
        <Swiper
          style={{
            width: '100%',
            userSelect: 'none',
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          initialSlide={0}
          watchSlidesProgress={true}
          watchOverflow
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          updateOnWindowResize
          onSlideChange={(swiper: ST) => setActiveIndex(swiper.realIndex + 1)}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} style={{ position: 'relative', width: '100%' }}>
              <Zoom IconUnzoom={MdClose}>
                <Image
                  width={700}
                  height={475}
                  sizes='100vw'
                  priority
                  src={item.attributes?.url || ''}
                  placeholder='blur'
                  blurDataURL={item.attributes?.url || ''}
                  alt={item.attributes?.alternativeText || ''}
                  style={{
                    width: '100%',
                    maxHeight: '500px',
                    objectFit: 'contain',
                  }}
                />
              </Zoom>
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderControl prevRef={prevRef} nextRef={nextRef} activeSlide={activeIndex} totalSlidesCount={data.length} />
      </Paper>
    </Grid>
  )
}

interface ISliderControl {
  totalSlidesCount: number
  activeSlide: number
  prevRef: React.MutableRefObject<null>
  nextRef: React.MutableRefObject<null>
}

const SliderControl: React.FC<ISliderControl> = ({ activeSlide, totalSlidesCount, prevRef, nextRef }) => {
  return (
    <Stack
      width={'100%'}
      height={50}
      direction='row'
      justifyContent={'space-between'}
      alignItems='center'
      sx={{
        px: 4,
        borderTop: '1px solid',
        borderColor: 'gray.50',
        backgroundColor: 'white',
      }}
    >
      <Stack direction='row' alignItems='center' spacing={2} sx={{ color: 'brand.500' }}>
        <FaRegImages fontSize={20} />
        <Text fontWeight={600}>
          {activeSlide} / {totalSlidesCount}
        </Text>
      </Stack>

      <Stack direction='row' alignItems='center' spacing={2}>
        <IconButton ref={prevRef} aria-label='prev' size='sm' icon={<FiChevronLeft fontSize={20} />} />

        <IconButton ref={nextRef} aria-label='prev' size='sm' icon={<FiChevronRight fontSize={20} />} />
      </Stack>
    </Stack>
  )
}

export default GallerySlider
