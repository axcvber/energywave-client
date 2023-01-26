import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const ErrorState = () => {
  return (
    <Stack height={500} spacing={4} justifyContent='center' alignItems={'center'} mt={10} mb={6}>
      <Box>
        <Image priority width={300} height={150} src={'/error.svg'} alt='error' />
      </Box>
      <Stack spacing={3} maxWidth={400}>
        <Heading size='lg' fontWeight={500} color='gray.900' textAlign='center'>
          Щось пішло не так
        </Heading>
        <Text fontSize='sm' color='gray.700' textAlign='center'>
          Зачекайте, поки ми не виправимо помилку. Ви також можете оновити сторінку або спробувати пізніше
        </Text>
      </Stack>
    </Stack>
  )
}

export default ErrorState
