import { VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

interface ICategoryCard {
  item: any
}

const CategoryCard: React.FC<ICategoryCard> = ({ item }) => {
  return (
    <VStack
      sx={{
        borderRadius: 30,
        p: 6,
        color: '#fff',
        position: 'relative',
        zIndex: 2,
        transition: '.4s',
        boxShadow: '0 0 78px -13px #b7b7b7',
        overflow: 'hidden',
        bgGradient: 'linear(to-r, teal.500, green.500)',
        border: '2px solid',
        borderColor: 'green.500',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: 1,
        bottom: -10,
        right: -10,
        // bgGradient: 'linear(to-r, teal.500, green.500)',
        background: '#fff',
        height: '50px',
        width: '50px',
        borderRadius: '50px',
        transform: 'scale(1)',
        transformOrigin: '50% 50%',
        transition: 'transform 0.40s ease-out',
      }}
      _hover={{
        transform: 'translateY(-15px)',
        cursor: 'pointer',
        color: '#333',
        '&::before': {
          transform: 'scale(22)',
        },
      }}
    >
      <Text fontSize={'2xl'} sx={{ zIndex: 9 }}>
        {item.title}
      </Text>
      <Image
        width={200}
        height={300}
        src={item.image}
        alt='generator'
        style={{
          zIndex: 9,
        }}
      />
      {/* <Text sx={{ zIndex: 9 }}>перейти до розділу</Text> */}
    </VStack>
  )
}

export default CategoryCard
