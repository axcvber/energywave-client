import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IProduct } from '../../../../store/slices/cartSlice'
import { numberWithSpaces } from '../../../../utils/numberWithSpaces'

interface IOderItem {
  item: IProduct
}

const OderItem: React.FC<IOderItem> = ({ item }) => {
  const productAmount = item.price.price * item.quantity
  return (
    <Stack
      as='li'
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: 6, lg: 4 }}
      justifyContent='space-between'
    >
      <HStack spacing={4} flex={1.5}>
        <Link href={`/catalog/${item.slug}`} passHref legacyBehavior>
          <Box as='a' minWidth={'70px'}>
            <Image
              priority
              alt={item.image?.alternativeText || ''}
              src={item.image?.url || ''}
              placeholder='blur'
              blurDataURL={item.image?.url || ''}
              width={70}
              height={70}
            />
          </Box>
        </Link>

        <Stack spacing={2} direction={'row'}>
          <Link href={`/catalog/${item.slug}`} passHref legacyBehavior>
            <Text
              as='a'
              fontSize={'md'}
              flex={1}
              fontWeight={600}
              color='gray.900'
              _hover={{ textDecoration: 'underline' }}
            >
              {item.name}
            </Text>
          </Link>
        </Stack>
      </HStack>

      <HStack spacing={5} flex={1} justifyContent='space-between'>
        <Stack spacing={1} alignItems={'center'}>
          <Text fontSize={'xs'} color='gray.400'>
            Ціна
          </Text>

          <Text color='gray.900' fontWeight={500}>
            {numberWithSpaces(item.price.price)} ₴
          </Text>
        </Stack>

        <Stack spacing={1} alignItems={'center'}>
          <Text fontSize={'xs'} color='gray.400'>
            Кількість
          </Text>

          <Text color='gray.900' fontWeight={500}>
            {item.quantity}
          </Text>
        </Stack>

        <Stack spacing={1} alignItems={'center'}>
          <Text fontSize={'xs'} color='gray.400'>
            Сумма
          </Text>

          <Text color='gray.900' fontWeight={500}>
            {numberWithSpaces(productAmount)} ₴
          </Text>
        </Stack>
      </HStack>
    </Stack>
  )
}

export default OderItem
