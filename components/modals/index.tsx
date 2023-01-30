import {
  ModalBody,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  IconButton,
  Text,
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { MdClose } from 'react-icons/md'

interface IModal {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title: string
  size?: string
}

const Modal: React.FC<IModal> = ({ isOpen, children, onClose, title, size = 'xl' }) => {
  return (
    <ChakraModal
      preserveScrollBarGap
      isOpen={isOpen}
      onClose={onClose}
      motionPreset='slideInBottom'
      size={{ base: 'full', md: size }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          borderBottom='1px solid'
          borderColor='gray.100'
          display={'flex'}
          justifyContent='space-between'
          alignItems={'center'}
        >
          <Text as='h3' fontSize={'2xl'} color={'gray.900'}>
            {title}
          </Text>
          <IconButton
            aria-label='Close modal'
            size='sm'
            variant='ghost'
            colorScheme={'gray'}
            icon={<MdClose fontSize={22} />}
            onClick={onClose}
          />
        </ModalHeader>
        <ModalBody pb={6} pt={4}>
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
