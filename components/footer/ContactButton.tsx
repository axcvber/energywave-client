import { Button, ButtonProps } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

interface IContactButton extends ButtonProps {
  label?: string
  link: string
  icon: ReactElement
}

const ContactButton: React.FC<IContactButton> = ({ label, link, icon, ...props }) => {
  return (
    <Button
      as='a'
      href={link}
      rel='noopener noreferrer'
      size='sm'
      variant={'ghost'}
      colorScheme='brand'
      leftIcon={icon}
      sx={{
        px: 2,
        'svg': {
          fontSize: 20,
        },
      }}
      {...props}
    >
      {label}
    </Button>
  )
}

export default ContactButton
