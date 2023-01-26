import { Grid, GridItem, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import Field from '../../form/Field'
import Paper from '../../layout/Paper'
import NumberedHeading from '../../layout/NumberedHeading'
import OtherRecipient from './contacts-step/OtherRecipient'

const ContactInfo = () => {
  const { control, watch } = useFormContext()
  const recipientValue = watch('contactInfo.recipient')

  return (
    <Paper as='section'>
      <NumberedHeading title='Контактні дані' mb={4} />
      <Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} rowGap={2} columnGap={4}>
        <GridItem>
          <Field name='contactInfo.lastName' control={control} label='Прізвище' />
        </GridItem>
        <GridItem>
          <Field name='contactInfo.firstName' control={control} label="Ім'я" />
        </GridItem>
        <GridItem>
          <Field name='contactInfo.phone' control={control} label='Мобільний телефон' type='tel' />
        </GridItem>
        <GridItem>
          <Field name='contactInfo.email' control={control} label='Електронна пошта' type='email' />
        </GridItem>
      </Grid>

      <Controller
        defaultValue={'Я'}
        control={control}
        name='contactInfo.recipient'
        render={({ field: { value, onChange } }) => (
          <RadioGroup onChange={onChange} value={value} my={3}>
            <Stack direction='row' spacing={2} alignItems='center'>
              <Text as='span' color='gray.800' mr={1}>
                Одержувач:
              </Text>
              <Radio value='Я'>
                <Text fontSize={'sm'} color='gray.500'>
                  Я
                </Text>
              </Radio>
              <Radio value='Інша людина'>
                <Text fontSize={'sm'} color='gray.500'>
                  Інша людина
                </Text>
              </Radio>
            </Stack>
          </RadioGroup>
        )}
      />

      {recipientValue === 'Інша людина' && <OtherRecipient />}
    </Paper>
  )
}

export default ContactInfo
