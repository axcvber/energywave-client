import { RadioGroup, FormControl } from '@chakra-ui/react'
import React from 'react'
import Paper from '../../layout/Paper'
import CheckoutRadio from '../CheckoutRadio'
import { MdOutlinePayments } from 'react-icons/md'
import NumberedHeading from '../../layout/NumberedHeading'
import { useFormContext, Controller } from 'react-hook-form'
import ErrorMessage from '../../form/ErrorMessage'

const Payment = () => {
  const { control } = useFormContext()

  return (
    <Paper as='section'>
      <NumberedHeading title='Оплата' mb={4} />

      <Controller
        defaultValue={''}
        control={control}
        name='payment.type'
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <FormControl isInvalid={!!error}>
            <ErrorMessage message={error?.message} mb={2.5} />
            <RadioGroup onChange={onChange} value={value}>
              <CheckoutRadio
                icon={<MdOutlinePayments />}
                value='Оплата при отриманні'
                isChecked={value === 'Оплата при отриманні'}
                isError={!!error}
                label={'Оплата при отриманні'}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
    </Paper>
  )
}

export default Payment
