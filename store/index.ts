import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import appSlice from './slices/appSlice'
import cartSlice from './slices/cartSlice'
import modalSlice from './slices/modalSlice'

const combinedReducer = combineReducers({
  app: appSlice,
  cart: cartSlice,
  modal: modalSlice,
})

const reducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const wrapper = createWrapper<AppStore>(makeStore)
