import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { NextSeo } from 'next-seo'

const NotFoundPage = () => {
  return (
    <>
      <NextSeo title='Сторінку не знайдено' nofollow noindex />
      <Container>
        <Stack justifyContent='center' alignItems='center' pb={12}>
          <Image priority width={400} height={300} src={'/404.svg'} alt='404' />
          <Stack spacing={4} alignItems='center' textAlign={'center'}>
            <Heading size='lg' color='gray.900' fontWeight={600}>
              Упс! Сторінку не знайдено
            </Heading>
            <Text fontSize='sm' color='gray.700'>
              Схоже, ми не можемо знайти цю сторінку.
            </Text>
            <Link href='/' passHref legacyBehavior>
              <Button as='a' variant={'link'} leftIcon={<HiOutlineExternalLink fontSize={20} />}>
                Повернутися на головну
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default NotFoundPage
