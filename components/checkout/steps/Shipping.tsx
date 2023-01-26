import { FormControl, RadioGroup, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Paper from '../../layout/Paper'
import CheckoutRadio from '../CheckoutRadio'
import { FaShippingFast } from 'react-icons/fa'
import { FaArrowsAlt } from 'react-icons/fa'
import { useFormContext, Controller } from 'react-hook-form'
import NumberedHeading from '../../layout/NumberedHeading'
import DeliveryService from './shipping-step/DeliveryService'
import CourierDelivery from './shipping-step/CourierDelivery'
import ErrorMessage from '../../form/ErrorMessage'

const Shipping = () => {
  const { control, watch, resetField } = useFormContext()

  const shippingType = watch('shipping.type')

  useEffect(() => {
    resetField('shipping.city')
    resetField('shipping.warehouse')
    resetField('shipping.street')
    resetField('shipping.house')
    resetField('shipping.body')
    resetField('shipping.apartment')
  }, [shippingType, resetField])

  return (
    <Paper as='section'>
      <NumberedHeading title='Доставка' mb={4} />

      <Controller
        defaultValue={''}
        control={control}
        name={'shipping.type'}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <FormControl isInvalid={!!error}>
            <ErrorMessage message={error?.message} mb={2.5} />

            <RadioGroup onChange={onChange} value={value}>
              <Stack spacing={3}>
                <CheckoutRadio
                  icon={<FaArrowsAlt />}
                  value='Нова Пошта'
                  isChecked={value === 'Нова Пошта'}
                  isError={!!error}
                  label={'З відділення "Нова Пошта"'}
                >
                  <DeliveryService />
                </CheckoutRadio>
                <CheckoutRadio
                  icon={<FaShippingFast />}
                  value="Кур'єр"
                  isChecked={value === "Кур'єр"}
                  isError={!!error}
                  label='Доставка за адресою (м.Київ)'
                >
                  <CourierDelivery />
                </CheckoutRadio>
              </Stack>
            </RadioGroup>
          </FormControl>
        )}
      />
    </Paper>
  )
}

export default Shipping
