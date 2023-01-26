import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CategoryCard from '../cards/CategoryCard'

const data = [
  {
    id: 1,
    title: 'Дизельні генератори',
    image: 'https://res.cloudinary.com/dasho3jbw/image/upload/v1673198592/pngwing.com_39_afw6bm.png',
  },
  {
    id: 2,
    title: 'Портативні генератори',
    image: 'https://res.cloudinary.com/dasho3jbw/image/upload/v1673268103/pngwing.com_40_ygf75s.png',
  },
]

const Categories = () => {
  return (
    <Container maxW='container.xl'>
      <SimpleGrid columns={4} spacing={10} mt={'-200px'}>
        {data.map((item) => (
          <CategoryCard key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Categories
