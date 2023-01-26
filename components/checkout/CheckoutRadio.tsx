import { Radio, Stack, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface ICheckoutRadio {
  label: string
  value: string
  children?: ReactNode
  isChecked: boolean
  isError: boolean
  icon: ReactNode
}

const CheckoutRadio: React.FC<ICheckoutRadio> = ({ label, value, children, isChecked, isError, icon }) => {
  return (
    <Stack spacing={2}>
      <Stack
        width={'100%'}
        bg={isChecked ? 'brand.50' : 'white'}
        border='1px solid'
        borderColor={isChecked ? 'brand.300' : isError ? 'red.500' : 'gray.100'}
        borderRadius='lg'
        _hover={{
          bg: !isChecked ? '#fafafa' : 'brand.50',
        }}
      >
        <Radio w={'100%'} checked={isChecked} value={value} py={3} px={4}>
          <Stack
            direction={'row'}
            alignItems='center'
            spacing={3}
            sx={{
              'svg': {
                fontSize: 18,
                color: isChecked ? 'brand.500' : isError ? 'red.500' : 'gray.700',
                ml: 1,
              },
            }}
          >
            {icon}
            <Text color={isChecked ? 'brand.500' : isError ? 'red.500' : 'gray.700'} fontWeight={500}>
              {label}
            </Text>
          </Stack>
        </Radio>
        {isChecked && children && (
          <Stack pb={6} pt={2} px={10}>
            {children}
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

export default CheckoutRadio
