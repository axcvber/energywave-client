import React, { ReactNode } from 'react'
import ErrorState from './ErrorState'
import EmptyState from './EmptyState'
import { Grid } from '@chakra-ui/react'

interface IDataList {
  children: ReactNode
  isEmpty: boolean
  isError: boolean
}

const DataList: React.FC<IDataList> = ({ isEmpty, isError, children }) => {
  if (isError) {
    return <ErrorState />
  }

  if (isEmpty) {
    return <EmptyState />
  }

  return (
    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }} gap={6} as='ul'>
      {children}
    </Grid>
  )
}

export default DataList
