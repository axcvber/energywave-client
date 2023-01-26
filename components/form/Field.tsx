import { FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { Controller } from 'react-hook-form'
import { BiErrorCircle } from 'react-icons/bi'
import InputMask from 'react-input-mask'
import ErrorMessage from './ErrorMessage'
import Label from './Label'

interface IField {
  name: string
  control: any
  label: string
  type?: React.HTMLInputTypeAttribute
}

const Field: React.FC<IField> = ({ name, control, label, type = 'text' }) => {
  return (
    <Controller
      defaultValue={''}
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl isInvalid={!!error}>
          <Label label={label} />
          <InputGroup
            sx={{
              'svg': {
                fontSize: 20,
                color: 'red.500',
              },
            }}
          >
            {type === 'tel' ? (
              <Input
                as={InputMask}
                mask='+3\8\ (099) 999 99 99'
                maskChar=''
                alwaysShowMask={false}
                {...field}
                type={type}
                focusBorderColor={!!error ? 'red.500' : 'brand.300'}
                isInvalid={!!error}
                boxShadow={!!error ? 'none !important' : 'initial'}
                borderRadius={'4px'}
                fontSize={15}
                color='gray.900'
                pl={3}
                height={38}
              />
            ) : (
              <Input
                {...field}
                name={name}
                type={type}
                focusBorderColor={!!error ? 'red.500' : 'brand.300'}
                isInvalid={!!error}
                boxShadow={!!error ? 'none !important' : 'initial'}
                borderRadius={'4px'}
                pl={3}
                fontSize={15}
                color='gray.900'
                bg='white'
                height={38}
              />
            )}

            {!!error && (
              <InputRightElement pointerEvents={'none'}>
                <BiErrorCircle />
              </InputRightElement>
            )}
          </InputGroup>
          <ErrorMessage message={error?.message} />
        </FormControl>
      )}
    />
  )
}

export default Field
