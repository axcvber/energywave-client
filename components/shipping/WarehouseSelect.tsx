import React, { useEffect, useState } from 'react'
import { SingleValue } from 'react-select'
import { ShippingApi } from '../../api/shipping-api'
import SearchSelect, { SelectOption } from '../form/SearchSelect'
import { useFormContext } from 'react-hook-form'

const WarehouseSelect = () => {
  const [options, setOptions] = useState<SelectOption[]>([])
  const [isNextPageLoading, setNextPageLoading] = useState(false)
  const { watch, resetField, control } = useFormContext()

  const selectedCity = watch('shipping.city')

  useEffect(() => {
    resetField('shipping.warehouse', {
      keepDirty: true,
      keepError: true,
      defaultValue: null,
    })

    // setValue('warehouse', undefined, { shouldValidate: true, shouldDirty: false })
  }, [selectedCity, resetField])

  const loadDefaultOptions = async () => {
    if (selectedCity && selectedCity.value) {
      try {
        setNextPageLoading(true)
        setOptions([])
        const { data } = await ShippingApi.getWarehouses({ cityRef: selectedCity.value })

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
  }

  const loadOptions = async (inputValue: string, callback: (options: SelectOption[]) => void) => {
    if (selectedCity && selectedCity.value) {
      const { data } = await ShippingApi.getWarehouses({
        inputValue,
        cityRef: selectedCity.value,
      })
      const dataOptions = data.map(({ Ref, Description }) => ({
        label: Description,
        value: Ref,
      }))
      callback(dataOptions)
    }
  }

  // const handleSelectWarehouse = (newValue: SingleValue<SelectOption>) => {
  //   console.log('newValue', newValue)
  //   setSelectedWarehouse(newValue)
  // }

  return (
    <SearchSelect
      name='shipping.warehouse'
      control={control}
      defaultOptions={options}
      onLoadOptions={loadOptions}
      onLoadDefaultOptions={loadDefaultOptions}
      isLoading={isNextPageLoading}
      // onChange={handleSelectWarehouse}
      label='Відділення'
    />
  )
}

export default WarehouseSelect
