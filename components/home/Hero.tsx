import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { ComponentHomeHero } from '../../generated'

interface IHero {
  data: ComponentHomeHero
}

const Hero: React.FC<IHero> = ({ data }) => {
  return (
    <Stack alignItems={'center'} justifyContent='center' h={1000} position={'relative'} mt='-100px'>
      <Box
        sx={{
          // overflow: 'hidden',
          // borderBottomLeftRadius: '50%',
          // borderBottomRightRadius: '50%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          '&:after': {
            content: '""',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(1px)',
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
          alt='Mountains'
          src={data.background.data?.attributes?.url || ''}
          placeholder='blur'
          blurDataURL={data.background.data?.attributes?.url || ''}
          quality={100}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            // overflow: 'hidden',
            borderBottomLeftRadius: '100%',
            borderBottomRightRadius: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            zIndex: 9,
            width: '100%',
          }}
        >
          {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#fff'
              fill-opacity='1'
              d='M0,160L48,176C96,192,192,224,288,250.7C384,277,480,299,576,277.3C672,256,768,192,864,186.7C960,181,1056,235,1152,224C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            ></path>
          </svg> */}
        </Box>
      </Box>

      <Container maxW='container.xl'>
        <Stack direction={'row'} justifyContent='space-between'>
          <Stack spacing={5} maxWidth={500} color='#fff' alignItems={'flex-start'}>
            <Heading as='h1' fontSize='6xl' fontWeight={600}>
              {data.title}
            </Heading>
            <Text fontSize='md'>{data.description}</Text>
            <Button>Переглянути каталог</Button>
          </Stack>
          <Box>
            <Image
              priority
              src={data.image.data?.attributes?.url || ''}
              alt='Picture of the author'
              width={600}
              height={475}
              sizes='100vw'
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Hero
