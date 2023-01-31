import React, { useState } from 'react'
import { ShippingApi } from '../../api/shipping-api'
import SearchSelect, { SelectOption } from '../form/SearchSelect'
import { useFormContext } from 'react-hook-form'

const CitySelect = () => {
  const [options, setOptions] = useState<SelectOption[]>([])
  const [isNextPageLoading, setNextPageLoading] = useState(false)
  const { control } = useFormContext()

  const loadDefaultOptions = async () => {
    try {
      setNextPageLoading(true)
      const { data } = await ShippingApi.getCities()

      const dataOptions = data.map(({ Ref, Description }) => ({
        label: Description,
        value: Ref,
      }))

      setOptions(dataOptions)
      setNextPageLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const loadOptions = async (inputValue: string, callback: (options: SelectOption[]) => void) => {
    const { data } = await ShippingApi.getCities(inputValue)
    const dataOptions = data.map(({ Ref, Description }) => ({
      label: Description,
      value: Ref,
    }))
    callback(dataOptions)
  }

  return (
    <SearchSelect
      name='shipping.city'
      control={control}
      defaultOptions={options}
      onLoadOptions={loadOptions}
      onLoadDefaultOptions={loadDefaultOptions}
      isLoading={isNextPageLoading}
      label='Населений пункт'
    />
  )
}

export default CitySelect
