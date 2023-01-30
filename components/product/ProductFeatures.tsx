import { Box, Button, Heading, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ComponentProductPreviewOptions, Maybe } from '../../generated'
import Paper from '../layout/Paper'

interface IProductFeatures {
  productName: string
  features: Maybe<ComponentProductPreviewOptions>[]
}

const ProductFeatures: React.FC<IProductFeatures> = ({ productName, features }) => {
  const [showMore, setShowMore] = useState(false)
  const itemsToRender = showMore ? features : features.slice(0, 10)
  return (
    <Paper>
      <Heading fontWeight={600} size='lg' color={'gray.900'} mb={6}>
        Характеристики
        <Text as='span' color='gray.500'>
          {' '}
          {productName}
        </Text>
      </Heading>

      <TableContainer width={'100%'}>
        <Table variant='striped' colorScheme='brand'>
          <Tbody
            whiteSpace={'break-spaces'}
            wordBreak={'break-word'}
            sx={{
              'tr td': {
                borderBottom: 'none',
              },
              'tr:nth-of-type(odd) td': {
                bg: 'brand.50',
              },
            }}
          >
            {itemsToRender.map((item) => (
              <Tr key={item?.id}>
                <Td fontWeight={500} borderTopLeftRadius={'md'} borderBottomLeftRadius={'md'}>
                  {item?.option}
                </Td>
                <Td isNumeric fontWeight={500} borderTopRightRadius={'md'} borderBottomRightRadius={'md'}>
                  {item?.description}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {features.length > 10 && !showMore && (
        <Button
          mt={2}
          ml={2}
          fontWeight={500}
          variant='link'
          textDecoration={'underline'}
          onClick={() => setShowMore(true)}
        >
          Показати всі характеристики
        </Button>
      )}
    </Paper>
  )
}

export default ProductFeatures
