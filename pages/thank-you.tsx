import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Container, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const ThankYouPage = () => {
  return (
    <Container>
      <Stack spacing={4} height='60vh' justifyContent='center' alignItems={'center'}>
        <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Замовлення успішно відправлено!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Thanks for submitting your application. Our team will get back to you soon.
          </AlertDescription>
          <Button variant={'outline'}>Повернутися до каталогу</Button>
        </Alert>
      </Stack>
    </Container>
  )
}

export default ThankYouPage
