import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const EmptyState = () => {
  return (
    <Stack height={500} spacing={4} justifyContent='center' alignItems={'center'} mt={10} mb={6}>
      <Box>
        <Image priority width={350} height={150} src={'/nodata.svg'} alt='empty' />
      </Box>
      <Stack spacing={3} maxWidth={400}>
        <Heading size='lg' fontWeight={500} color='gray.900' textAlign='center'>
          Результатів не знайдено
        </Heading>
        <Text fontSize='sm' color='gray.700' textAlign='center'>
          Спробуйте видалити деякі фільтри або збільшити діапазон, щоб побачити більше результатів
        </Text>
      </Stack>
    </Stack>
  )
}

export default EmptyState
