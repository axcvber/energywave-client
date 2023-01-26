import { Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiSort } from 'react-icons/bi'
import DropdownMenu from '../layout/DropdownMenu'

export enum SortValues {
  RECOMMENDED = 'id:asc',
  LOWEST_PRICE = 'price.price:asc',
  HIGHEST_PRICE = 'price.price:desc',
  NEWEST_INVENTORY = 'id:desc',
}

interface ISortMenu {
  onSelectSort: (option: SortValues) => void
}

type SortItem = {
  label: string
  value: SortValues
}

const sortData: SortItem[] = [
  {
    label: 'Рекомендовано',
    value: SortValues.RECOMMENDED,
  },
  {
    label: 'Новітній інвентар',
    value: SortValues.NEWEST_INVENTORY,
  },
  {
    label: 'Найнижча ціна',
    value: SortValues.LOWEST_PRICE,
  },
  {
    label: 'Найвища ціна',
    value: SortValues.HIGHEST_PRICE,
  },
]

const SortMenu: React.FC<ISortMenu> = ({ onSelectSort }) => {
  const [triggerTitle, setTriggerTitle] = useState(sortData[0].label)

  const handleSorting = (item: SortItem) => {
    setTriggerTitle(item.label)
    onSelectSort(item.value)
  }

  return (
    <DropdownMenu
      title={triggerTitle}
      icon={<BiSort />}
      menu={[
        ...sortData.map((item, inx) => (
          <Text key={inx} width={'100%'} px={2} py={1} onClick={() => handleSorting(item)}>
            {item.label}
          </Text>
        )),
      ]}
    />
  )
}

export default SortMenu
