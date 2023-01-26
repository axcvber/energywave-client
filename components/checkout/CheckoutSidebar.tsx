import { Box, Button, Grid, GridItem, Heading, HStack, IconButton, Input, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { numberWithSpaces } from '../../utils/numberWithSpaces'
import Paper from '../layout/Paper'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import CartItem from '../cart/CartItem'
import CartList from '../cart/CartList'
import { useFormContext } from 'react-hook-form'

const CheckoutSidebar = () => {
  const { cartItems } = useAppSelector((state) => state.cart)
  const {
    formState: { isSubmitting },
  } = useFormContext()
  return (
    <Paper>
      <Stack spacing={3}>
        <Heading size={'md'} fontWeight={600}>
          Разом
        </Heading>

        <Grid
          templateAreas={`
         ". ."
         ". ."
         ". ."
        `}
          gridTemplateColumns={'3fr 2fr'}
          width={'100%'}
          gap={4}
        >
          <GridItem>
            <Text color='gray.500'>Сума замовлення:</Text>
          </GridItem>
          <GridItem justifySelf={'flex-end'}>
            <Text color='gray.500'>423 089 ₴</Text>
          </GridItem>
          <GridItem>
            <Text color='gray.500'>Доставка:</Text>
          </GridItem>
          <GridItem justifySelf={'flex-end'}>
            <Text color='gray.500' textAlign='end'>
              0
            </Text>
          </GridItem>
          <GridItem>
            <Text color='gray.500'>Всього до оплати:</Text>
          </GridItem>
          <GridItem justifySelf={'flex-end'}>
            <Text color='gray.500' textAlign='end'>
              423 089 ₴
            </Text>
          </GridItem>
        </Grid>

        {/* <HStack justifyContent={'space-between'}>
          <Text>Сума замовлення:</Text>
          <Text>423 089</Text>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <Text>Доставка:</Text>
          <Text maxW={100}>За тарифами перевізника</Text>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <Text>Всього до оплати</Text>
          <Text>423 089</Text>
        </HStack> */}
        <Button size={'lg'} loadingText={'Sending...'} isLoading={isSubmitting} type='submit'>
          Підтвердити
        </Button>

        <Text fontSize={'sm'}>Получение заказа от 5 000 ₴ только по паспорту (Закон от 06.12.2019 № 361-IX)</Text>
      </Stack>
    </Paper>
  )
}

export default CheckoutSidebar
