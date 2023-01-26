import { Badge } from '@chakra-ui/react'
import React from 'react'
import { ProductStatus } from '../interfaces/ProductStatus'

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  let color
  let label
  let colorScheme
  switch (status) {
    case ProductStatus.IN_STOCK:
      label = 'Є в наявності'
      color = 'green.500'
      colorScheme = 'green'
      break
    case ProductStatus.EXPIRES:
      label = 'Закінчується'
      color = 'orange.500'
      colorScheme = 'orange'
      break
    case ProductStatus.EXPIRED:
      label = 'Товар закінчився'
      color = 'gray.500'
      colorScheme = 'gray'
      break
    default:
      break
  }

  return (
    <Badge colorScheme={colorScheme} color={color} px={2} py={1} fontWeight={500} borderRadius={4} textTransform='none'>
      {label}
    </Badge>
  )
}

export default StatusBadge
