import { Container, Grid, GridItem, Heading, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../cards/ProductCard'
import { RiLinkM } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'

const TopSales = () => {
  return (
    <Container my={12}>
      <Heading>Топ продажу</Heading>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
        gap={6}
        as='ul'
        my={10}
      >
        <GridItem w='100%' as='li'>
          <ProductCard />
        </GridItem>
        <GridItem w='100%' as='li'>
          <ProductCard />
        </GridItem>
        <GridItem w='100%' as='li'>
          <ProductCard />
        </GridItem>
        <GridItem w='100%' as='li'>
          <ProductCard />
        </GridItem>
      </Grid>
      <Stack direction={'row'} justifyContent='center'>
        <Button colorScheme={'green'} variant='outline' rightIcon={<FiExternalLink fontSize={20} />}>
          Весь каталог
        </Button>
      </Stack>
    </Container>
  )
}

export default TopSales
