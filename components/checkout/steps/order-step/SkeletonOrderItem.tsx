import { HStack, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import React from 'react'

const SkeletonOrderItem = () => {
  return (
    <Stack
      as='li'
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: 6, lg: 4 }}
      justifyContent='space-between'
    >
      <HStack spacing={5} flex={1.5}>
        <SkeletonCircle size='70px' startColor='gray.50' endColor='gray.100' />
        <SkeletonText flex={1} mt='4' orientation='vertical' noOfLines={2} spacing='3' skeletonHeight='3.5' />
      </HStack>
      <HStack spacing={5} flex={1}>
        <SkeletonText
          flex={1}
          display='flex'
          flexDirection={'column'}
          alignItems='center'
          color='red.100'
          orientation='vertical'
          noOfLines={2}
          spacing='3'
          skeletonHeight='3.5'
          textAlign={'center'}
        />
        <SkeletonText
          flex={1}
          display='flex'
          flexDirection={'column'}
          alignItems='center'
          color='red.100'
          orientation='vertical'
          noOfLines={2}
          spacing='3'
          skeletonHeight='3.5'
        />

        <SkeletonText
          flex={1}
          display='flex'
          flexDirection={'column'}
          alignItems='center'
          color='red.100'
          orientation='vertical'
          noOfLines={2}
          spacing='3'
          skeletonHeight='3.5'
        />
      </HStack>
    </Stack>
  )
}

export default SkeletonOrderItem
