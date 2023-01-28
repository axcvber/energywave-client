import { Box, Button, Grid, GridItem, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { numberWithSpaces } from '../../utils/numberWithSpaces'
import Paper from '../layout/Paper'
import { useFormContext } from 'react-hook-form'
import { getTotalAmount } from '../../store/slices/cartSlice'
import { BsQuestionCircle } from 'react-icons/bs'
import Link from 'next/link'

const CheckoutSidebar = () => {
  const totalAmount = useAppSelector(getTotalAmount)
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
          gridTemplateColumns={'2fr 1fr'}
          width={'100%'}
          gap={3}
          alignItems='center'
        >
          <GridItem>
            <Text fontSize={15} color='gray.500'>
              Сума замовлення:
            </Text>
          </GridItem>
          <GridItem justifySelf={'flex-end'}>
            <Text fontSize={15} fontWeight={500} color='gray.900'>
              {numberWithSpaces(totalAmount)} ₴
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize={15} color='gray.500'>
              Доставка:
            </Text>
          </GridItem>
          <GridItem justifySelf={'flex-end'}>
            <Text fontSize={15} fontWeight={500} color='gray.900' textAlign='end'>
              за тарифами перевізника
            </Text>
          </GridItem>
          <GridItem>
            <Text color='gray.500' fontSize={15}>
              До оплати:
            </Text>
          </GridItem>
          <GridItem>
            <Text whiteSpace='nowrap' fontSize={'2xl'} fontWeight={600} color='brand.500' textAlign='end'>
              {numberWithSpaces(totalAmount)} ₴
            </Text>
          </GridItem>
        </Grid>

        <Button size={'lg'} loadingText={'Відправлення...'} isLoading={isSubmitting} type='submit'>
          Підтвердити
        </Button>

        <Stack spacing={3}>
          <Text fontSize={'sm'} color='gray.600'>
            Підтверджуючи замовлення, я приймаю умови:
          </Text>
          <Stack as='ul' spacing={2}>
            <TermsItem text='положення про збір і захист персональних даних' link='/privacy-policy' />
            <TermsItem text='користувальницької угоди' link='/privacy-policy' />
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}

const TermsItem: React.FC<{ text: string; link: string }> = ({ text, link }) => {
  return (
    <HStack
      as='li'
      spacing={2}
      alignItems='flex-start'
      sx={{
        'svg': {
          color: 'brand.500',
          mt: 1,
        },
      }}
    >
      <Link href={link} passHref legacyBehavior>
        <Box as='a'>
          <BsQuestionCircle />
        </Box>
      </Link>

      <Text fontSize={'small'} color='gray.600'>
        {text}
      </Text>
    </HStack>
  )
}

export default CheckoutSidebar
