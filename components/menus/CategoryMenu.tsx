import { Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiCategory } from 'react-icons/bi'
import { CategoryEntity, Maybe } from '../../generated'
import DropdownMenu from '../layout/DropdownMenu'

interface ICategoryMenu {
  data: CategoryEntity[]
  onSelectCategory: (id?: Maybe<string>) => void
}

const CategoryMenu: React.FC<ICategoryMenu> = ({ data, onSelectCategory }) => {
  const [triggerTitle, setTriggerTitle] = useState('Всі товари')

  const handleSelectCategory = (item?: CategoryEntity) => {
    setTriggerTitle(item ? item.attributes!.category : 'Всі товари')

    onSelectCategory(item?.id)
  }

  return (
    <DropdownMenu
      title={triggerTitle}
      icon={<BiCategory />}
      menu={[
        <Text key={1} width={'100%'} px={2} py={1} onClick={() => handleSelectCategory(undefined)}>
          Всі товари
        </Text>,
        ...data.map((item) => (
          <Text key={item.id} width={'100%'} px={2} py={1} onClick={() => handleSelectCategory(item)}>
            {item.attributes!.category}
          </Text>
        )),
      ]}
    />
  )
}

export default CategoryMenu
