import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import Field from '../../../form/Field'

const OtherRecipient = () => {
  const { control } = useFormContext()

  return (
    <Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} rowGap={2} columnGap={4}>
      <GridItem>
        <Field name='contactInfo.recipientLastName' control={control} label='Прізвище' />
      </GridItem>
      <GridItem>
        <Field name='contactInfo.recipientFirstName' control={control} label="Ім'я" />
      </GridItem>
      <GridItem>
        <Field name='contactInfo.recipientMiddleName' control={control} label='По батькові' />
      </GridItem>
      <GridItem>
        <Field name='contactInfo.recipientPhone' control={control} label='Мобільний телефон' type='tel' />
      </GridItem>
    </Grid>
  )
}

export default OtherRecipient
