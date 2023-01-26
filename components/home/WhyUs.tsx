import { Box, Container, Grid, GridItem, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const data = [
  {
    id: 1,
    icon: 'https://res.cloudinary.com/dasho3jbw/image/upload/v1673218481/shield_fhwkha.png',
    label: 'Гарантуємо безпечну покупку',
  },
  {
    id: 2,
    icon: 'https://res.cloudinary.com/dasho3jbw/image/upload/v1673218485/completed-task_lqxfux.png',
    label: '12 місяців гарантії від виробника',
  },
  {
    id: 3,
    icon: 'https://res.cloudinary.com/dasho3jbw/image/upload/v1673218488/money_y1tg4i.png',
    label: 'Оплата зручним способом',
  },
  {
    id: 4,
    icon: 'https://res.cloudinary.com/dasho3jbw/image/upload/v1673218489/box_ohgcxv.png',
    label: 'Доставимо товар у визначений термін',
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/dasho3jbw/image/upload/v1673218490/experience_pzezku.png',
    label: 'Спеціалісти у своїй справі',
  },
  {
    id: 6,
    icon: 'https://res.cloudinary.com/dasho3jbw/image/upload/v1673218492/rating_fvxque.png',
    label: 'Більше 167 позитивних відгуків клієнтів',
  },
]

const WhyUs = () => {
  return (
    <Container my={12}>
      <Stack>
        <Heading>Чому ми?</Heading>
        <Stack
          pt={12}
          pb={8}
          spacing={{ base: 12, md: 16 }}
          direction={{ base: 'column-reverse', md: 'row' }}
          alignItems={{ base: 'center', md: 'flex-start', lg: 'center' }}
          // justifyContent={'center'}
        >
          <Grid
            templateColumns={{ base: '1fr 1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }}
            // columnGap={2}
            width={{ base: 'auto', md: '100%' }}
            gap={12}
            // rowGap={10}
            // width={{ base: '100%', md: '70%' }}
            // pl={5}
            // mt={{ base: 12, md: 0 }}
            justifyItems={{ base: 'center', lg: 'initial' }}
            // bg={'red'}
          >
            {data.map((item) => (
              <GridItem
                key={item.id}
                maxW={180}
                display='flex'
                flexDirection={'column'}
                justifyContent='center'
                alignItems={'center'}
                bgGradient='linear(to-r, teal.500, green.500)'
                px={3}
                py={4}
                borderRadius='xl'
                boxShadow={'lg'}
                color='#fff'
              >
                <Box bg='green.50' p={3} borderRadius='full'>
                  <Image width={40} height={40} src={item.icon} alt='icon' />
                </Box>

                <Text fontSize={'sm'} mt={3} textAlign='center'>
                  {item.label}
                </Text>
              </GridItem>
            ))}
          </Grid>

          {/* <Box sx={{ position: 'relative', width: '100%', height: '300px' }}>
            <Image
              alt='icon'
              src={'https://res.cloudinary.com/dasho3jbw/image/upload/v1673218481/shield_fhwkha.png'}
              fill
              sizes='100vw'
              style={
                {
                  // objectFit: 'contain',
                }
              }
            />
          </Box> */}

          <Box width={{ base: '90%', sm: '70%', md: '80%', lg: '80%' }}>
            <Image
              alt='icon'
              src={'https://res.cloudinary.com/dasho3jbw/image/upload/v1673095493/39261-logo_ltjtrp.png'}
              width={350}
              height={276}
              sizes='50vw'
              style={{
                // objectFit: 'cover',
                width: '100%',
                // height: 'auto',
                // background: 'blue',
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}

export default WhyUs
