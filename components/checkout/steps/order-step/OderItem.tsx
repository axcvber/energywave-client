import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IProduct } from '../../../../store/slices/cartSlice'

interface IOderItem {
  item: IProduct
}

const OderItem: React.FC<IOderItem> = ({ item }) => {
  return (
    <Stack
      as='li'
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: 6, lg: 4 }}
      justifyContent='space-between'
    >
      <HStack spacing={5} flex={1.5}>
        <Link href={`/catalog/${item.slug}`} passHref legacyBehavior>
          <Box as='a' minWidth={'70px'}>
            <Image
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
              fontWeight={500}
              color='gray.900'
              _hover={{ textDecoration: 'underline' }}
            >
              {item.name}
            </Text>
          </Link>

          {/* <IoCloseCircleOutline fontSize={22} onClick={onRemoveItem} /> */}
        </Stack>
      </HStack>

      <HStack spacing={5} flex={1} justifyContent='space-between'>
        <Stack spacing={1} alignItems={'center'}>
          <Text fontSize={'xs'} color='gray.400'>
            Ціна
          </Text>

          <Text color='gray.900'>23 231 ₴</Text>
        </Stack>

        <Stack spacing={1} alignItems={'center'}>
          <Text fontSize={'xs'} color='gray.400'>
            Кількість
          </Text>

          <Text color='gray.900'>{item.quantity}</Text>
        </Stack>

        <Stack spacing={1} alignItems={'center'}>
          <Text fontSize={'xs'} color='gray.400'>
            Сумма
          </Text>

          <Text color='gray.900'>23 231 ₴</Text>
        </Stack>
      </HStack>
    </Stack>
  )
}

export default OderItem
