import { Container, Grid, GridItem, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import CheckoutSidebar from '../components/checkout/CheckoutSidebar'
import CheckoutSteps from '../components/checkout/CheckoutSteps'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { CheckoutSchema } from '../validation/checkout-schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { SelectOption } from '../components/form/SearchSelect'
import axios from 'axios'
import { resetCart } from '../store/slices/cartSlice'
import { wrapper } from '../store'
import Backdrop from '../components/layout/Backdrop'
import Heading from '../components/layout/Heading'
import { NextSeo } from 'next-seo'

type ContactInfoType = {
  lastName: string
  firstName: string
  email: string
  phone: string
  recipientLastName: string
  recipientFirstName: string
  recipientMiddleName: string
  recipientPhone: string
  recipient: string
}

type ShippingType = {
  city: SelectOption | null
  warehouse: SelectOption | null
  street: SelectOption | null
  house: string
  body: string
  apartment: string
  type: string
}

type PaymentType = {
  type: string
}

interface ICheckoutInputs {
  contactInfo: ContactInfoType
  shipping: ShippingType
  payment: PaymentType
}

const CheckoutPage = () => {
  const { cartItems } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const toast = useToast()
  const [isOpenBackdrop, setOpenBackdrop] = useState(false)

  const onCloseBackdrop = () => {
    setOpenBackdrop(false)
  }

  useEffect(() => {
    if (!cartItems.length) {
      setOpenBackdrop(true)
      router.replace('/catalog')
    }
    return () => onCloseBackdrop()
  }, [cartItems.length, router])

  const methods = useForm<ICheckoutInputs>({
    resolver: yupResolver(CheckoutSchema),
    defaultValues: {
      shipping: {
        city: null,
        warehouse: null,
        street: null,
      },
    },
  })

  const onSubmit: SubmitHandler<ICheckoutInputs> = async (data) => {
    const formData = {
      contactInfo: data.contactInfo,
      order: cartItems,
      shipping: data.shipping,
      payment: data.payment,
    }

    try {
      await axios.post(`${process.env.SERVER_API}/api/orders`, { data: { formData } })
      await router.replace('/thank-you')
      dispatch(resetCart())
    } catch (error) {
      toast({
        position: 'bottom-left',
        description: 'Сталася помилка спробуйте пізніше',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <>
      <NextSeo title='Оформлення замовлення' nofollow noindex />
      <Backdrop isOpen={isOpenBackdrop} onClose={onCloseBackdrop} />
      <Container position={'relative'}>
        <Heading
          title={'Оформлення замовлення'}
          withLine
          stackProps={{ mb: 6, alignItems: { base: 'center', lg: 'flex-start' } }}
          headingProps={{ textAlign: { base: 'center', lg: 'left' } }}
        />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid templateColumns={{ base: '1fr', lg: '1fr 300px' }} gap={6} alignItems='flex-start'>
              <GridItem>
                <CheckoutSteps />
              </GridItem>
              <GridItem as='aside' position={'sticky'} top={'94px'}>
                <CheckoutSidebar />
              </GridItem>
            </Grid>
          </form>
        </FormProvider>
      </Container>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const state = store.getState()
  const cartItems = state.cart.cartItems

  if (!cartItems.length) {
    return {
      redirect: {
        permanent: false,
        destination: '/catalog',
      },
    }
  }

  return {
    props: {},
  }
})

export default CheckoutPage
