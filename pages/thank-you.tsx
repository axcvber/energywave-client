import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NextSeo } from 'next-seo'

const ThankYouPage = () => {
  return (
    <>
      <NextSeo nofollow noindex />
      <Container>
        <Stack spacing={4} minHeight={600} justifyContent='center' alignItems={'center'}>
          <Box>
            <Image priority width={350} height={150} src={'/success.svg'} alt='success' />
          </Box>
          <Stack spacing={3} alignItems='center'>
            <Heading size='lg' fontWeight={500} color='gray.900' textAlign='center'>
              Дякуємо за ваше замовлення!
            </Heading>
            <Text fontSize='sm' maxW={350} color='gray.700' textAlign='center'>
              {"Замовлення успішно відправлено. Ми зв'яжемося з вами найближчим часом."}
            </Text>
            <Link href='/catalog' passHref legacyBehavior>
              <Button as={'a'} fontSize={15} variant={'link'} textDecoration='underline'>
                Повернутися до каталогу
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default ThankYouPage
