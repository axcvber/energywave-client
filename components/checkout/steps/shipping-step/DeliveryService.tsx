import React from 'react'
import { Stack } from '@chakra-ui/react'
import CitySelect from '../../../shipping/CitySelect'
import WarehouseSelect from '../../../shipping/WarehouseSelect'
import { useFormContext } from 'react-hook-form'

const DeliveryService = () => {
  const { control } = useFormContext()
  return (
    <Stack width={'100%'} direction={'row'} spacing={4}>
      <Stack width={'50%'}>
        <CitySelect />
      </Stack>
      <Stack width={'50%'}>
        <WarehouseSelect />
      </Stack>
    </Stack>
  )
}

export default DeliveryService
