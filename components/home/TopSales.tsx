import { Container, Grid, GridItem, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../cards/ProductCard'
import { FiExternalLink } from 'react-icons/fi'
import { useHomeTopSalesQuery } from '../../generated'
import Link from 'next/link'
import ProductCardSkeleton from '../cards/ProductCardSkeleton'
import Heading from '../layout/Heading'

const TopSales: React.FC<{ title: string }> = ({ title }) => {
  const { data, loading, error } = useHomeTopSalesQuery()

  if (error || data?.homePage?.data?.attributes?.topSales.products?.data.length === 0) {
    return null
  }

  return (
    <Container my={12}>
      <Heading title={title} withLine headingProps={{ size: 'xl' }} />
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
        gap={6}
        as='ul'
        my={10}
      >
        {loading ? (
          <ProductCardSkeleton />
        ) : (
          data?.homePage?.data?.attributes?.topSales.products?.data.map((item: any) => (
            <GridItem key={item.id} w='100%' as='li'>
              <ProductCard item={item} />
            </GridItem>
          ))
        )}
      </Grid>
      <Stack direction={'row'} justifyContent='center'>
        <Link href='/catalog' passHref legacyBehavior>
          <Button as='a' variant='outline' rightIcon={<FiExternalLink fontSize={20} />}>
            Весь каталог
          </Button>
        </Link>
      </Stack>
    </Container>
  )
}

export default TopSales
