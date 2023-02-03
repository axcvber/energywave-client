import { FormControl, Stack, Text, useTheme } from '@chakra-ui/react'
import React from 'react'
import { MultiValue, SingleValue, StylesConfig } from 'react-select'
import AsyncSelect from 'react-select/async'
import { components } from 'react-select'
import { useController } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'
import Label from './Label'

export type SelectOption = {
  value: string
  label: string
}

interface ISearchSelect {
  name: string
  control: any
  defaultOptions: SelectOption[]
  onLoadOptions: (inputValue: string, callback: (options: SelectOption[]) => void) => void
  onLoadDefaultOptions: () => void
  isLoading: boolean
  label: string
}

const SearchSelect: React.FC<ISearchSelect> = ({
  name,
  control,
  defaultOptions,
  onLoadOptions,
  onLoadDefaultOptions,
  isLoading,
  label,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: null,
  })

  const colourStyles: StylesConfig<SelectOption> = {
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: 'white',
      cursor: 'pointer',
      boxShadow: isFocused && !error ? '0 0 0 1px #6DADEE' : '#E53E3E',
      borderColor: isFocused && !error ? '#6DADEE' : error ? '#E53E3E' : 'inherit',
      '&:hover': {
        borderColor: isFocused && !error ? '#6DADEE' : error ? '#E53E3E' : 'inherit',
      },
    }),
    menuList: (styles) => ({ ...styles, padding: '8px' }),
    option: (styles, { isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isDisabled ? undefined : isSelected ? '#1B7FE4' : isFocused ? '#E8F2FC' : undefined,
      color: isSelected ? '#fff' : '#666',
      cursor: 'pointer',
      fontSize: 15,
      borderRadius: '5px',
      marginBottom: '5px',
      ':last-child': {
        marginBottom: '0',
      },
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled ? (isSelected ? '#4496E9' : '#BFDBF8') : undefined,
      },
    }),
    singleValue: (styles) => ({ ...styles, fontSize: 15 }),
    placeholder: (styles) => ({ ...styles, fontSize: 15 }),
  }

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <AsyncSelect
        ref={field.ref}
        value={field.value}
        onChange={field.onChange}
        cacheOptions
        loadOptions={onLoadOptions}
        defaultOptions={defaultOptions}
        // onFocus={onLoadDefaultOptions}
        onMenuOpen={onLoadDefaultOptions}
        isLoading={isLoading}
        placeholder={''}
        noOptionsMessage={() => <Text fontSize={'15px'}>Результатів не знайдено</Text>}
        loadingMessage={() => <Text fontSize={'15px'}>Пошук результатів...</Text>}
        styles={colourStyles}
      />
      <ErrorMessage message={error?.message} />
    </FormControl>
  )
}

export default SearchSelect
