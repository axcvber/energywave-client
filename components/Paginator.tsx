import { HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ReactPaginate from 'react-paginate'

interface IPaginator {
  pageCount: number
  page: number | undefined
  totalCount: number | undefined
  handleChange: (event: any) => void
}

const Paginator: React.FC<IPaginator> = ({ page, pageCount, totalCount, handleChange }) => {
  if (!totalCount || totalCount <= 20) {
    return null
  }
  return (
    <Stack my={5} alignItems='center'>
      <HStack
        forcePage={page}
        flexWrap={'wrap'}
        gap={3}
        as={ReactPaginate}
        breakLabel='...'
        onPageChange={handleChange}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={<FiChevronLeft />}
        nextLabel={<FiChevronRight />}
        sx={{
          'li a': {
            width: '35px',
            height: '35px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'brand.500',
            userSelect: 'none',
            border: '1px solid',
            borderColor: 'brand.500',
            borderRadius: 4,
            '&:hover': {
              bg: 'brand.50',
            },
          },
          '.selected a': {
            bg: 'brand.500',
            color: 'white',
            '&:hover': {
              bg: 'brand.500',
            },
          },
          '.disabled a': {
            opacity: 0.3,
            cursor: 'default',
          },
        }}
        renderOnZeroPageCount={null || undefined}
      />
    </Stack>
  )
}

export default Paginator
