import { FormLabel } from '@chakra-ui/react'
import React from 'react'

interface ILabel {
  label: string
}

const Label: React.FC<ILabel> = ({ label }) => {
  return (
    <FormLabel fontSize={'small'} color='gray.600' fontWeight={500} mb={1}>
      {label}
    </FormLabel>
  )
}

export default Label
