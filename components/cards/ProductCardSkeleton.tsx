import { GridItem, Skeleton } from '@chakra-ui/react'
import React from 'react'
import Loader from '../layout/Loader'

const ProductCardSkeleton = () => {
  return (
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
  )
}

export default ProductCardSkeleton
