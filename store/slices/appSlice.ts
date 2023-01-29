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
  // extraReducers: (builder) => {
  //   builder.addCase(HYDRATE, (state, action) => {
  //     state = action.payload.app
  //     // both `state` and `action` are now correctly typed
  //     // based on the slice state and the `pending` action creator
  //   })
  // },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE app', action.payload)
      return {
        ...state,
        ...action.payload.app,
      }
    },
  },
})

export const { setGlobalData } = appSlice.actions
export default appSlice.reducer
