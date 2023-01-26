import { Grid, GridItem, Skeleton } from '@chakra-ui/react'
import React from 'react'
import { ProductsQuery } from '../generated'
import ProductCard from './cards/ProductCard'
import DataList from './layout/data-list/DataList'
import Loader from './layout/Loader'

interface IProductsList {
  data?: ProductsQuery
  isError: boolean
  isLoading: boolean
}

const ProductsList: React.FC<IProductsList> = ({ data, isError, isLoading }) => {
  return (
    <DataList isError={isError} isEmpty={data?.products?.data.length === 0}>
      <>
        {isLoading ? (
          <Loader quantity={12}>
            <GridItem w='100%' as='li'>
              <Skeleton
                width={'100%'}
                height={470}
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
  )
}

export default ProductsList
