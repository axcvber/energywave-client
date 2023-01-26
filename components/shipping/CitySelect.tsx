import React, { useState } from 'react'
import { MultiValue, SingleValue } from 'react-select'
import { ShippingApi } from '../../api/shipping-api'
import SearchSelect, { SelectOption } from '../form/SearchSelect'
import { useFormContext } from 'react-hook-form'

const CitySelect = () => {
  const [options, setOptions] = useState<SelectOption[]>([])
  const [isNextPageLoading, setNextPageLoading] = useState(false)
  const { watch, setValue, control } = useFormContext()

  const selectedCity = watch('shipping.city')
  console.log('city from CitySelect', selectedCity)

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

  const handleSelectCity = (newValue: SingleValue<SelectOption> | MultiValue<SelectOption>) => {
    console.log('newValue', newValue)
    // setValue('city', newValue, { shouldValidate: true })
    // setSelectedCity(newValue)
  }

  return (
    <SearchSelect
      name='shipping.city'
      control={control}
      defaultOptions={options}
      onLoadOptions={loadOptions}
      onLoadDefaultOptions={loadDefaultOptions}
      isLoading={isNextPageLoading}
      // onChange={handleSelectCity}
      label='Населений пункт'
    />
  )
}

export default CitySelect
