import React, { ReactNode } from 'react'
import { useAppSelector } from '../../store/hooks'
import CartModal from './CartModal'

export enum MODAL_TYPES {
  CART_MODAL = 'CART_MODAL',
}

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.CART_MODAL]: CartModal,
}

const ModalWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { modalType, modalProps } = useAppSelector((state) => state.modal)

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType]
    if (!ModalComponent) {
      return null
    }
    return <ModalComponent {...modalProps} />
  }

  return (
    <React.Fragment>
      {renderComponent()}
      {children}
    </React.Fragment>
  )
}

export default ModalWrapper
