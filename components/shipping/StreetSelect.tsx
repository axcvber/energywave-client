import React, { useState } from 'react'
import { SingleValue } from 'react-select'
import { ShippingApi } from '../../api/shipping-api'
import SearchSelect, { SelectOption } from '../form/SearchSelect'

interface IStreetSelect {
  // name: string
  control: any
}

const StreetSelect: React.FC<IStreetSelect> = ({ control }) => {
  const [options, setOptions] = useState<SelectOption[]>([])
  const [isNextPageLoading, setNextPageLoading] = useState(false)

  const loadDefaultOptions = async () => {
    try {
      setNextPageLoading(true)
      const { data } = await ShippingApi.getStreets({ cityRef: '8d5a980d-391c-11dd-90d9-001a92567626' })

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
    const { data } = await ShippingApi.getStreets({
      inputValue,
      cityRef: '8d5a980d-391c-11dd-90d9-001a92567626',
    })
    const dataOptions = data.map(({ Ref, Description }) => ({
      label: Description,
      value: Ref,
    }))
    callback(dataOptions)
  }

  return (
    <SearchSelect
      name='shipping.street'
      control={control}
      defaultOptions={options}
      onLoadOptions={loadOptions}
      onLoadDefaultOptions={loadDefaultOptions}
      isLoading={isNextPageLoading}
      label='Вулиця'
    />
  )
}

export default StreetSelect
