import { Box, Stack, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'

interface IQuantityCounter {
  quantity: number
  inStock: number
  onIncrement: () => void
  onDecrement: () => void
}

const QuantityCounter: React.FC<IQuantityCounter> = ({ quantity, inStock, onIncrement, onDecrement }) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      bg='brand.50'
      py={1}
      px={3}
      borderRadius='full'
      cursor={'default'}
      userSelect='none'
      border='1px solid'
      borderColor={'brand.100'}
    >
      <IconButton icon={<BiMinus />} onClick={onDecrement} isDisable={quantity === 1} />
      <Text minW={'35px'} textAlign='center' fontWeight={600} as='span' fontSize='sm' px={2}>
        {quantity}
      </Text>
      <IconButton icon={<BiPlus />} onClick={onIncrement} isDisable={quantity >= inStock} />
    </Stack>
  )
}

interface IconButtonProps {
  icon: ReactNode
  onClick: () => void
  isDisable: boolean
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, isDisable }) => {
  return (
    <Box
      as='button'
      aria-label='Decrement'
      onClick={onClick}
      outline='none'
      sx={{
        cursor: isDisable ? 'default' : 'pointer',
        'svg': {
          color: isDisable ? 'brand.100' : 'brand.500',
          fontSize: 16,
        },
      }}
    >
      {icon}
    </Box>
  )
}

export default QuantityCounter
