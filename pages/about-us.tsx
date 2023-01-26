import { Box, Container, Portal } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AsyncSelect from 'react-select/async'
import { ShippingApi } from '../api/shipping-api'
import { ASelects } from '../components/ASelects'
import { MemoExampleWrapper } from '../components/ExampleWrapper'
import { AsyncPaginate, wrapMenuList } from 'react-select-async-paginate'
import { loadOptions, OptionType } from '../utils/loadOptions'
import { MenuList as MyList } from '../components/MenuList'
import SelectWrapper from '../components/SelectWrapper'
import Select from '../components/Select'
import CitySelect from '../components/shipping/CitySelect'

const AboutUsPage = () => {
  const [options, setOptions] = useState<any>([])
  const [warehousesOptions, setWarehousesOptions] = useState<any>([])

  const [pageNo, setPage] = useState(0)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [isNextPageLoading, setNextPageLoading] = useState(false)
  const [selectedValue, setSelectedOption] = useState('')

  const [selectedCity, setSelectedCity] = useState()
  console.log('selectedCity', selectedCity)
  const ref = React.useRef()
  const loadWarehouses = async (page: number) => {
    try {
      setNextPageLoading(true)

      const { data, info }: any = await ShippingApi.getWarehouses({ page, cityRef: selectedCity.value })
      console.log('loadWarehousesdata', data)
      console.log('selectedValue', selectedCity.value)

      const dataOptions = data.map(({ Ref, Description }: any) => ({
        label: Description,
        value: Ref,
      }))

      const itemsData = warehousesOptions.concat(dataOptions)
      setWarehousesOptions(dataOptions)
      // const itemsData = options.concat(dataOptions)

      setHasNextPage(itemsData.length < info.totalCount)

      setNextPageLoading(false)
    } catch (err) {
      console.log(err)
    }
  }
  // const loadNextPage = async () => {
  //   await loadOptions(pageNo + 1)
  // }

  // const loadNextPage = async () => {
  //   await loadOptions(pageNo + 1)
  // }

  // const promiseOptions = async (inputValue: string) => {
  //   try {
  //     const params = {
  //       page: 1,
  //       size: 50,
  //     }
  //     const {
  //       data: { data, info },
  //     } = await axios({
  //       method: 'POST',
  //       url: process.env.SHIPPING_SERVICE_API,
  //       data: {
  //         apiKey: process.env.SHIPPING_SERVICE_API_KEY,
  //         modelName: 'Address',
  //         calledMethod: 'getCities',
  //         methodProperties: {
  //           Page: params.page,
  //           // FindByString: inputValue,
  //           Limit: params.size,
  //         },
  //       },
  //     })
  //     const dataOptions = data.map(({ CityID, Description }: any) => ({
  //       label: Description,
  //       value: CityID,
  //     }))
  //     return dataOptions
  //   } catch (error) {
  //     console.log(err)
  //   }
  // }

  const loadNextPageWarehouses = async () => {
    await loadWarehouses(pageNo + 1)
  }

  useEffect(() => {
    const loadNextPageWarehouses = async () => {
      await loadWarehouses(pageNo + 1)
    }
    loadNextPageWarehouses()
  }, [selectedCity])
  const options2 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]
  return (
    <Container maxW='md'>
      {/* <AsyncSelect options={options2} /> */}

      <CitySelect value={selectedCity} onChange={setSelectedCity} />

      {/* <Select
        value={selectedValue}
        inputValue={''}
        placeholder='Отделение'
        hasNextPage={hasNextPage}
        isNextPageLoading={isNextPageLoading}
        options={warehousesOptions}
        loadNextPage={loadNextPageWarehouses}
        onChange={(selected: any) => setSelectedOption(selected)}
        onInputChange={() => {}}
      /> */}
    </Container>
  )
}

const height = 35

// const MenuList = (props: any) => {
//   const { options, children, maxHeight, getValue } = props
//   const [value] = getValue()
//   const initialOffset = options.indexOf(value) * height

//   return (
//     <List width={'100%'} height={300} itemCount={children.length} itemSize={height}>
//       {({ index, style }) => <div style={style}>{children[index]}</div>}
//     </List>
//   )
// }

export default AboutUsPage
