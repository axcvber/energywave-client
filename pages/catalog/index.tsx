import { Container, GridItem, Heading, Skeleton, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CategoryEntity, GetCategoriesDocument, GetCategoriesQuery, Maybe, useProductsQuery } from '../../generated'
import DataList from '../../components/layout/data-list/DataList'
import Loader from '../../components/layout/Loader'
import ProductCard from '../../components/cards/ProductCard'
import client from '../../graphql/apollo-client'
import { NextPage } from 'next'
import CatalogNavigation from '../../components/CatalogNavigation'
import { SortValues } from '../../components/menus/SortMenu'
import { morph } from '../../utils/morph'
import Paginator from '../../components/Paginator'

interface ICatalogPage {
  categories: CategoryEntity[]
}

const CatalogPage: NextPage<ICatalogPage> = ({ categories }) => {
  const [category, setCategory] = useState<Maybe<string> | undefined>()
  const [sortBy, setSortBy] = useState<SortValues>(SortValues.RECOMMENDED)
  const [currentPage, setCurrentPage] = useState(0)
  const { data, loading, error } = useProductsQuery({
    variables: {
      categoryId: category,
      sortBy,
      start: currentPage,
      limit: 20,
    },
  })
  const totalResults = data?.products ? data.products.meta.pagination.total : 0
  const resultText = ['Результат', 'Результати', 'Результатів']

  const totalCount = data?.products?.meta.pagination.total || 0
  const pageCount = data?.products?.meta.pagination.pageCount || 0

  const onChangeCategory = (catId?: Maybe<string>) => {
    setCategory(catId)
    setCurrentPage(0)
  }

  const onSelectSort = (option: SortValues) => {
    setSortBy(option)
  }

  const handlePageChange = (event: any) => {
    setCurrentPage(event.selected)
  }

  useEffect(() => {
    if (loading) {
      window.scrollTo({ top: 0, left: 0 })
    }
  }, [data, loading])

  return (
    <Container>
      <VStack alignItems={'flex-start'} spacing={1} mb={6}>
        <Heading fontWeight={600} size='lg'>
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
            <Loader quantity={8}>
              <GridItem w='100%' as='li'>
                <Skeleton
                  width={'100%'}
                  height={490}
                  startColor='gray.50'
                  endColor='gray.200'
                  borderRadius={'xl'}
                  boxShadow={'base'}
                  border='1px solid'
                  borderColor='gray.100'
                />
              </GridItem>
            </Loader>
          ) : (
            data?.products?.data.map((item: any) => (
              <GridItem key={item.id} w='100%' as='li'>
                <ProductCard item={item} />
              </GridItem>
            ))
          )}
        </>
      </DataList>
      <Paginator page={currentPage} pageCount={pageCount} totalCount={totalCount} handleChange={handlePageChange} />
    </Container>
  )
}

export const getStaticProps = async () => {
  const { data } = await client.query<GetCategoriesQuery>({
    query: GetCategoriesDocument,
  })

  return {
    props: {
      categories: data.categories?.data,
    },
    revalidate: 60,
  }
}

export default CatalogPage
