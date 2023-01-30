import { Action, AnyAction, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
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
  switch (action.type) {
    case HYDRATE:
      if (action.payload.app === 'init') delete action.payload.app
      if (action.payload.page === 'init') delete action.payload.page
      return { ...state, ...action.payload }
    case 'APP':
      return { ...state, app: action.payload }
    case 'PAGE':
      return { ...state, page: action.payload }
    default:
      return combinedReducer(state, action)
  }
}

// const reducer: typeof combinedReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     if (action.payload.app) delete action.payload.app
//     if (action.payload.page) delete action.payload.page
//     if (action.payload.cart) delete action.payload.cart

//     const nextState = {
//       ...state,
//       ...action.payload,
//     }
//     return nextState
//   } else {
//     return combinedReducer(state, action)
//   }
// }

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
