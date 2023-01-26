import { Container, Grid, GridItem, Heading, useToast } from '@chakra-ui/react'
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
    shouldFocusError: false,
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
    console.log('checkout data', formData)

    try {
      await axios.post(`${process.env.SERVER_API}/api/orders`, { data: { formData } })
      // await router.replace('/thank-you')
      // dispatch(resetCart())
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
      <Backdrop isOpen={isOpenBackdrop} onClose={onCloseBackdrop} />
      <Container position={'relative'}>
        <Heading as='h1' textAlign={{ base: 'center', lg: 'left' }} size={'lg'} fontWeight={600} mb={6}>
          Оформлення замовлення
        </Heading>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid templateColumns={{ base: '1fr', lg: '1fr 300px' }} gap={6} alignItems='flex-start'>
              <GridItem>
                <CheckoutSteps />
              </GridItem>
              <GridItem as='aside' position={'sticky'} top={6}>
                <CheckoutSidebar />
              </GridItem>
            </Grid>
          </form>
        </FormProvider>
      </Container>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
  const state = store.getState()
  const cartItems = state.cart.cartItems
  // console.log('cartItems SSR', cartItems)

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

// export const getStaticProps = () => {
//   if (!content) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/welcome',
//       },
//     };
//   }
//   return {
//     props: {
//       pageData: data.homePage?.data?.attributes,
//     },
//     revalidate: 60,
//   }
// }

export default CheckoutPage
