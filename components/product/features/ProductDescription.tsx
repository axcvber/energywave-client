import { Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { ComponentProductDescription } from '../../../generated'
import Markdown from '../../layout/Markdown'
import { MdOutlineDescription } from 'react-icons/md'

interface IProductDescription {
  productName: string
  description: ComponentProductDescription
}

const ProductDescription: React.FC<IProductDescription> = ({ productName, description }) => {
  return (
    <>
      <Heading fontWeight={600} size='lg' color={'gray.900'} mb={6}>
        Опис
        <Text as='span' color='gray.500'>
          {' '}
          {productName}
        </Text>
      </Heading>
      <Markdown content={description.text} />
      {description.pdfLink && (
        <Button
          as='a'
          href={description.pdfLink}
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            'span': {
              mr: 1,
            },
          }}
          leftIcon={<MdOutlineDescription fontSize={18} />}
          variant='link'
        >
          Документація
        </Button>
      )}
    </>
  )
}

export default ProductDescription
