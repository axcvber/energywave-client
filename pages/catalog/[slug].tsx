import { Container, Grid, GridItem } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import React from 'react'
import GallerySlider from '../../components/product/GallerySlider'
import {
  GetProductPropsDocument,
  GetProductPropsQuery,
  GetProductPropsQueryVariables,
  GetProductsPathsDocument,
  GetProductsPathsQuery,
  ProductEntity,
} from '../../generated'
import client from '../../graphql/apollo-client'
import ProductSidebar from '../../components/product/ProductSidebar'
import ProductFeatures from '../../components/product/ProductFeatures'
import dynamic from 'next/dynamic'

const SimilarProducts = dynamic(() => import('../../components/product/SimilarProducts'), {
  ssr: false,
})

interface ICatalogSingle {
  item: ProductEntity
}

const CatalogSingle: React.FC<ICatalogSingle> = ({ item }) => {
  return (
    <Container>
      <Grid templateColumns={{ base: '1fr', lg: '1fr 350px' }} gap={6} alignItems='flex-start'>
        <GridItem>
          <GallerySlider data={item.attributes!.gallerySlider.data} />
        </GridItem>
        <GridItem as='aside' position={{ base: 'static', lg: 'sticky' }} top={6}>
          <ProductSidebar item={item} />
        </GridItem>
        <GridItem>
          <ProductFeatures productName={item.attributes!.name} features={item.attributes!.fullOptions} />
        </GridItem>
      </Grid>
      <SimilarProducts productId={item.id as string} />
    </Container>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const { data } = await client.query<GetProductPropsQuery, GetProductPropsQueryVariables>({
    query: GetProductPropsDocument,
    variables: {
      slug: params?.slug,
    },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      item: data.products?.data[0],
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<GetProductsPathsQuery>({
    query: GetProductsPathsDocument,
  })

  const paths =
    data.products?.data.map(({ attributes }) => ({
      params: { slug: attributes?.slug },
    })) || []

  return {
    paths,
    fallback: false,
  }
}

export default CatalogSingle
