import { Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import GallerySlider from '../../components/product/GallerySlider'
import {
  GetProductPropsDocument,
  GetProductPropsQuery,
  GetProductPropsQueryVariables,
  ProductEntity,
} from '../../generated'
import client from '../../graphql/apollo-client'
import ProductSidebar from '../../components/product/ProductSidebar'
import ProductFeatures from '../../components/product/ProductFeatures'
import dynamic from 'next/dynamic'
import SeoSingle from '../../components/seo/SeoSingle'
import { GetServerSidePropsContext } from 'next'

const SimilarProducts = dynamic(() => import('../../components/product/SimilarProducts'), {
  ssr: false,
})

interface ICatalogSingle {
  item: ProductEntity
}

const CatalogSingle: React.FC<ICatalogSingle> = ({ item }) => {
  return (
    <>
      <SeoSingle seo={item.attributes!.seo} />
      <Container>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 350px' }} gap={6} alignItems='flex-start'>
          <GridItem>
            <GallerySlider data={item.attributes!.gallerySlider.data} />
          </GridItem>
          <GridItem as='aside' position={{ base: 'static', lg: 'sticky' }} top={'94px'}>
            <ProductSidebar item={item} />
          </GridItem>
          <GridItem>
            <ProductFeatures
              productName={item.attributes!.name}
              fullOptions={item.attributes!.fullOptions}
              description={item.attributes!.description}
            />
          </GridItem>
        </Grid>
        <SimilarProducts productId={item.id as string} />
      </Container>
    </>
  )
}

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<{ slug: string }>) => {
  try {
    const { data } = await client.query<GetProductPropsQuery, GetProductPropsQueryVariables>({
      query: GetProductPropsDocument,
      variables: {
        slug: params?.slug,
      },
    })

    if (!data.products?.data.length) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        item: data.products?.data[0],
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

// export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
//   const { data } = await client.query<GetProductPropsQuery, GetProductPropsQueryVariables>({
//     query: GetProductPropsDocument,
//     variables: {
//       slug: params?.slug,
//     },
//   })

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       item: data.products?.data[0],
//     },
//     revalidate: 60,
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data } = await client.query<GetProductsPathsQuery>({
//     query: GetProductsPathsDocument,
//   })

//   const paths =
//     data.products?.data.map(({ attributes }) => ({
//       params: { slug: attributes?.slug },
//     })) || []

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default CatalogSingle
