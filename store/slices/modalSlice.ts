import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
  isOpen: boolean
  modalType: string
  modalProps: any
}

const initialState: ModalState = {
  modalType: '',
  modalProps: {},
  isOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, { payload }: PayloadAction<{ modalType: string; modalProps?: any }>) {
      state.isOpen = true
      state.modalType = payload.modalType
      state.modalProps = payload.modalProps || {}
    },
    hideModal(state) {
      state.isOpen = false
    },
  },
})

export const { showModal, hideModal } = modalSlice.actions
export default modalSlice.reducer
