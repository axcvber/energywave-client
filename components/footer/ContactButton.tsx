import { Button } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

interface IContactButton {
  label?: string
  link: string
  icon: ReactElement
}

const ContactButton: React.FC<IContactButton> = ({ label, link, icon }) => {
  return (
    <Button
      as='a'
      href={link}
      size='sm'
      variant={'ghost'}
      colorScheme='brand'
      leftIcon={icon}
      sx={{
        px: 1.5,
        'svg': {
          fontSize: 20,
        },
      }}
    >
      {label}
    </Button>
  )
}

export default ContactButton
