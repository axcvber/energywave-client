import { Box, Button, Heading, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { numberWithSpaces } from '../../utils/numberWithSpaces'
import ContactInfo from './steps/ContactInfo'
import OrderStep from './steps/order-step/OrderStep'
import Payment from './steps/Payment'
import Shipping from './steps/Shipping'

const CheckoutSteps = () => {
  return (
    <Stack spacing={6}>
      <ContactInfo />
      <OrderStep />
      <Shipping />
      <Payment />
    </Stack>
  )
}

export default CheckoutSteps
