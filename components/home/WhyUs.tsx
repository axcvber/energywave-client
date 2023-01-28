import { Box, Container, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { ComponentHomeWhyUs } from '../../generated'
import Heading from '../layout/Heading'

interface IWhyUs {
  data: ComponentHomeWhyUs
}

const WhyUs: React.FC<IWhyUs> = ({ data }) => {
  return (
    <Container mt={8} mb={12}>
      <Stack>
        <Heading title={data.title} withLine headingProps={{ size: 'xl' }} />
        <Stack
          pt={12}
          pb={8}
          spacing={{ base: 12, md: 16 }}
          direction={{ base: 'column-reverse', md: 'row' }}
          alignItems={{ base: 'center', md: 'flex-start', lg: 'center' }}
        >
          <Grid
            templateColumns={{ base: '1fr 1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }}
            width={{ base: 'auto', md: '100%' }}
            gap={12}
            justifyItems={{ base: 'center', lg: 'initial' }}
          >
            {data.item.map((item) => (
              <GridItem
                key={item?.id}
                maxW={180}
                display='flex'
                flexDirection={'column'}
                justifyContent='center'
                alignItems={'center'}
                bgGradient='linear(to-r, brand.300, brand.500)'
                px={3}
                py={4}
                borderRadius='xl'
                boxShadow={'lg'}
                color='#fff'
              >
                <Box bg='brand.50' p={3} borderRadius='full' border={'2px solid'} borderColor='brand.500'>
                  <Image
                    priority
                    width={40}
                    height={40}
                    placeholder='blur'
                    src={item!.icon.data!.attributes!.url}
                    blurDataURL={item!.icon.data!.attributes!.url}
                    alt={item!.icon.data?.attributes?.alternativeText || ''}
                  />
                </Box>

                <Text fontSize={'sm'} mt={2} textAlign='center' fontWeight={500}>
                  {item!.description}
                </Text>
              </GridItem>
            ))}
          </Grid>

          <Box width={{ base: '90%', sm: '70%', md: '80%', lg: '80%' }}>
            <Image
              priority
              placeholder='blur'
              src={data.image.data!.attributes!.url}
              blurDataURL={data.image.data!.attributes!.url}
              width={350}
              height={276}
              sizes='50vw'
              alt={data.image.data!.attributes!.alternativeText || ''}
              style={{
                width: '100%',
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}

export default WhyUs
