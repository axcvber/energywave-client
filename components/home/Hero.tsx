import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { ComponentHomeHero } from '../../generated'
import { getBase64StringFromDataURL } from '../../utils/getBase64StringFromDataURL'

interface IHero {
  data: ComponentHomeHero
}

const Hero: React.FC<IHero> = ({ data }) => {
  return (
    <Box width={'100%'} minH={'120vh'} position={'relative'} overflow='hidden'>
      <Container as={Stack} width={'100%'} minH={'100vh'} justifyContent='center'>
        <Stack maxW={500} spacing={5} alignItems={'flex-start'}>
          <Heading as='h1' color='#fff' fontSize={{ base: '5xl', md: '6xl', lg: '6xl' }} fontWeight={600}>
            {data.title}
          </Heading>
          <Text color='gray.50'>{data.description}</Text>

          <Link href='/catalog' passHref legacyBehavior>
            <Button
              as='a'
              rightIcon={<HiOutlineArrowRight fontSize={22} />}
              size={'lg'}
              boxShadow='0px 0px 57px 5px rgba(0,187,255,0.3)'
            >
              Переглянути каталог
            </Button>
          </Link>
        </Stack>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          '&:after': {
            content: '""',
            background: 'rgba(0,0,0,0.5)',
            // backdropFilter: 'blur(2px)',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
      >
        <Image
          priority
          alt='background'
          src={data.background.data!.attributes!.url}
          placeholder='blur'
          blurDataURL={getBase64StringFromDataURL(data.background.data!.attributes!.url)}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -2,
            left: 0,
            zIndex: 9,
            width: '100vw',
          }}
        >
          <svg id='wave' viewBox='0 0 1440 190' version='1.1' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
                <stop stopColor='rgba(247, 248, 249, 1)' offset='0%'></stop>
                <stop stopColor='rgba(247, 248, 249, 1)' offset='100%'></stop>
              </linearGradient>
            </defs>
            <path
              fill='url(#sw-gradient-0)'
              d='M0,76L30,76C60,76,120,76,180,79.2C240,82,300,89,360,101.3C420,114,480,133,540,136.2C600,139,660,127,720,110.8C780,95,840,76,900,79.2C960,82,1020,108,1080,120.3C1140,133,1200,133,1260,123.5C1320,114,1380,95,1440,72.8C1500,51,1560,25,1620,22.2C1680,19,1740,38,1800,41.2C1860,44,1920,32,1980,50.7C2040,70,2100,120,2160,129.8C2220,139,2280,108,2340,104.5C2400,101,2460,127,2520,120.3C2580,114,2640,76,2700,57C2760,38,2820,38,2880,60.2C2940,82,3000,127,3060,145.7C3120,165,3180,158,3240,136.2C3300,114,3360,76,3420,76C3480,76,3540,114,3600,126.7C3660,139,3720,127,3780,107.7C3840,89,3900,63,3960,60.2C4020,57,4080,76,4140,85.5C4200,95,4260,95,4290,95L4320,95L4320,190L4290,190C4260,190,4200,190,4140,190C4080,190,4020,190,3960,190C3900,190,3840,190,3780,190C3720,190,3660,190,3600,190C3540,190,3480,190,3420,190C3360,190,3300,190,3240,190C3180,190,3120,190,3060,190C3000,190,2940,190,2880,190C2820,190,2760,190,2700,190C2640,190,2580,190,2520,190C2460,190,2400,190,2340,190C2280,190,2220,190,2160,190C2100,190,2040,190,1980,190C1920,190,1860,190,1800,190C1740,190,1680,190,1620,190C1560,190,1500,190,1440,190C1380,190,1320,190,1260,190C1200,190,1140,190,1080,190C1020,190,960,190,900,190C840,190,780,190,720,190C660,190,600,190,540,190C480,190,420,190,360,190C300,190,240,190,180,190C120,190,60,190,30,190L0,190Z'
            ></path>
          </svg>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
