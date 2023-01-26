import { Box, Modal, ModalContent, ModalOverlay, Spinner } from '@chakra-ui/react'
import React from 'react'

interface IBackdrop {
  isOpen: boolean
  onClose: () => void
}

const Backdrop: React.FC<IBackdrop> = ({ isOpen, onClose }) => {
  return (
    <Modal blockScrollOnMount onClose={onClose} isOpen={isOpen} isCentered motionPreset='none'>
      <ModalOverlay bg='whiteAlpha.300' backdropFilter='blur(10px) hue-rotate(30deg)' />
      <ModalContent>
        <Box position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} zIndex={9999}>
          <Spinner size='xl' color={'brand.500'} />
        </Box>
      </ModalContent>
    </Modal>
  )
}

export default Backdrop
