import { FormErrorMessage, FormErrorMessageProps, Text } from '@chakra-ui/react'
import React from 'react'

interface IFormErrorMessage extends FormErrorMessageProps {
  message?: string
}

const ErrorMessage: React.FC<IFormErrorMessage> = ({ message, ...props }) => {
  if (!message) null
  return (
    <FormErrorMessage as='span' fontSize={'xs'} ml={1} mt={1.5} fontWeight={500} {...props}>
      {message}
    </FormErrorMessage>
  )
}

export default ErrorMessage
