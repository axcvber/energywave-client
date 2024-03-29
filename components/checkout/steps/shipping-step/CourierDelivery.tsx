import { Stack } from '@chakra-ui/react'
import React from 'react'
import Field from '../../../form/Field'
import StreetSelect from '../../../shipping/StreetSelect'
import { useFormContext } from 'react-hook-form'

const CourierDelivery = () => {
  const { control } = useFormContext()

  return (
    <Stack width={'100%'} direction={{ base: 'column', md: 'row' }} spacing={4}>
      <Stack flex={1}>
        <StreetSelect control={control} />
      </Stack>
      <Stack flex={1} direction='row' spacing={4}>
        <Field name='shipping.house' control={control} label='Будинок' />
        <Field name='shipping.body' control={control} label='Корпус' />
        <Field name='shipping.apartment' control={control} label='Квартира' />
      </Stack>
    </Stack>
  )
}

export default CourierDelivery
