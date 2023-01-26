import { Box, Button, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { CategoryEntity, Maybe } from '../generated'
import CategoryMenu from './menus/CategoryMenu'
import SortMenu, { SortValues } from './menus/SortMenu'

interface ICatalogNavigation {
  categories: CategoryEntity[]
  selectedCat?: Maybe<string>
  onSelectCategory: (id?: Maybe<string>) => void
  onSelectSort: (option: SortValues) => void
}

const CatalogNavigation: React.FC<ICatalogNavigation> = ({
  categories,
  selectedCat,
  onSelectCategory,
  onSelectSort,
}) => {
  return (
    <HStack
      width={'100%'}
      alignItems={'flex-start'}
      gap={3}
      mb={6}
      flexWrap='wrap'
      justifyContent={{ base: 'flex-start', lg: 'space-between' }}
    >
      <Stack display={{ base: 'none', lg: 'flex' }} flex={1} direction={'row'} gap={3} flexWrap='wrap'>
        <Button
          variant={!selectedCat ? 'solid' : 'outline'}
          borderRadius={'full'}
          fontSize={15}
          onClick={() => onSelectCategory(undefined)}
        >
          Всі товари
        </Button>
        {categories.map((item) => (
          <Button
            fontSize={15}
            borderRadius={'full'}
            variant={item.id === selectedCat ? 'solid' : 'outline'}
            key={item.id}
            onClick={() => onSelectCategory(item.id)}
          >
            {item.attributes?.category}
          </Button>
        ))}
      </Stack>
      <Box display={{ base: 'block', lg: 'none' }}>
        <CategoryMenu data={categories} onSelectCategory={onSelectCategory} />
      </Box>

      <SortMenu onSelectSort={onSelectSort} />
    </HStack>
  )
}

export default CatalogNavigation
