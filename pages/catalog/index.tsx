import { Container, GridItem, Heading, Skeleton, Text, VStack } from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { CategoryEntity, GetCategoriesDocument, GetCategoriesQuery, Maybe, useProductsQuery } from '../../generated'
import DataList from '../../components/layout/data-list/DataList'
import ProductCard from '../../components/cards/ProductCard'
import client from '../../graphql/apollo-client'
import { NextPage } from 'next'
import CatalogNavigation from '../../components/CatalogNavigation'
import { SortValues } from '../../components/menus/SortMenu'
import { morph } from '../../utils/morph'
import Paginator from '../../components/Paginator'
import ProductCardSkeleton from '../../components/cards/ProductCardSkeleton'
import { NextSeo } from 'next-seo'
import { wrapper } from '../../store'

interface ICatalogPage {
  categories: CategoryEntity[]
}

const CatalogPage: NextPage<ICatalogPage> = ({ categories }) => {
  const [category, setCategory] = useState<Maybe<string> | undefined>(undefined)
  const [sortBy, setSortBy] = useState<SortValues>(SortValues.RECOMMENDED)
  const { data, loading, error, refetch } = useProductsQuery({
    variables: {
      categoryId: category,
      sortBy,
      start: 0,
      limit: 20,
    },
    notifyOnNetworkStatusChange: true,
  })
  const totalResults = data?.products ? data.products.meta.pagination.total : 0
  const resultText = ['Результат', 'Результати', 'Результатів']

  const page = data?.products?.meta.pagination.page || 1
  const pageSize = data?.products?.meta.pagination.pageSize
  const totalCount = data?.products?.meta.pagination.total || 0
  const pageCount = data?.products?.meta.pagination.pageCount || 0

  const onChangeCategory = (catId?: Maybe<string>) => {
    setCategory(catId)
  }

  const onSelectSort = (option: SortValues) => {
    setSortBy(option)
  }

  const handlePageChange = useCallback(
    (event: { selected: number }) => {
      if (pageSize) {
        const newOffset = (event.selected * pageSize) % totalCount
        console.log('newOffset', newOffset)
        refetch({
          start: newOffset,
        })
      }
    },
    [pageSize, totalCount, refetch]
  )

  useEffect(() => {
    if (loading) {
      window.scrollTo({ top: 0, left: 0 })
    }
  }, [data, loading])

  return (
    <>
      <NextSeo title='Каталог товарів' />
      <Container>
        <VStack alignItems={'flex-start'} spacing={1} mb={6}>
          <Heading fontWeight={600} size='lg' color='gray.900'>
            Каталог товарів
          </Heading>
          {loading ? (
            <Skeleton startColor='gray.50' endColor='gray.200' width={'100px'} height='24px' borderRadius={4} />
          ) : (
            <Text fontWeight={500} as='span' color='gray.500'>
              {`${totalResults} ${morph(totalResults, resultText)}`}
            </Text>
          )}
        </VStack>

        <CatalogNavigation
          categories={categories}
          selectedCat={category}
          onSelectCategory={onChangeCategory}
          onSelectSort={onSelectSort}
        />

        <DataList isError={!!error} isEmpty={data?.products?.data.length === 0}>
          <>
            {loading ? (
              <ProductCardSkeleton />
            ) : (
              data?.products?.data.map((item: any) => (
                <GridItem key={item.id} w='100%' as='li'>
                  <ProductCard item={item} />
                </GridItem>
              ))
            )}
          </>
        </DataList>
        <Paginator page={page - 1} pageCount={pageCount} totalCount={totalCount} handleChange={handlePageChange} />
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query<GetCategoriesQuery>({
    query: GetCategoriesDocument,
  })
  return {
    props: {
      categories: data.categories?.data,
    },
  }
}

export default CatalogPage
