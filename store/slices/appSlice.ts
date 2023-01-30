import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { InitialDataQuery } from '../../generated'
import { HYDRATE } from 'next-redux-wrapper'

interface AppState {
  initialData: InitialDataQuery | null
}

const initialState: AppState = {
  initialData: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGlobalData(state, action: PayloadAction<InitialDataQuery>) {
      state.initialData = action.payload
    },
  },
})

export const { setGlobalData } = appSlice.actions
export default appSlice.reducer
