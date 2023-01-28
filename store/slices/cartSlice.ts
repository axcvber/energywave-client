import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CookieName, deleteCookie, getCookie, setCookie } from '../../hooks/useCookie'
import { ComponentProductPrice, Maybe, UploadFile } from '../../generated'
import { IncomingMessage, ServerResponse } from 'http'
import { RootState } from '..'

export interface IProduct extends IProductPayload {
  quantity: number
}

interface IProductPayload {
  id: string
  name: string
  image: Maybe<UploadFile>
  price: ComponentProductPrice
  slug: string
  inStock: number
  quantity?: number
}

export interface CartState {
  cartItems: Array<IProduct>
}

const initialState: CartState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (state, { payload }: PayloadAction<{ req?: IncomingMessage; res?: ServerResponse<IncomingMessage> }>) => {
      const result: IProduct[] | [] = getCookie(CookieName.CARD, payload)
      state.cartItems = result
    },

    addToCart: (state, { payload }: PayloadAction<IProductPayload>) => {
      const itemInCart = state.cartItems.find((item) => item.id === payload.id)
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cartItems.push({ ...payload, quantity: payload.quantity || 1 })
      }
      setCookie(CookieName.CARD, state.cartItems)
    },

    incrementQuantity: (state, { payload }: PayloadAction<string>) => {
      const itemInCart = state.cartItems.find((item) => item.id === payload)
      if (itemInCart && itemInCart.quantity < itemInCart.inStock) {
        itemInCart.quantity++
      }
      setCookie(CookieName.CARD, state.cartItems)
    },

    decrementQuantity: (state, { payload }: PayloadAction<string>) => {
      const itemInCart = state.cartItems.find((item) => item.id === payload)
      if (itemInCart) {
        itemInCart.quantity === 1 ? (itemInCart.quantity = 1) : itemInCart.quantity--
      }
      setCookie(CookieName.CARD, state.cartItems)
    },

    removeItem: (state, { payload }: PayloadAction<string>) => {
      const removeItem = state.cartItems.filter((item) => item.id !== payload)
      state.cartItems = removeItem
      setCookie(CookieName.CARD, state.cartItems)
    },

    resetCart: () => {
      deleteCookie(CookieName.CARD)
      return initialState
    },
  },
})

export const { getCart, addToCart, incrementQuantity, decrementQuantity, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer

type Selector<S> = (state: RootState) => S

export const checkItemInCart = (id: string): Selector<boolean> =>
  createSelector(
    (state: RootState) => state.cart.cartItems,
    (items) => !!items.find((item) => item.id === id)
  )

export const getItemQuantity = (id: string): Selector<number> =>
  createSelector(
    (state: RootState) => state.cart.cartItems,
    (items) => items.find((item) => item.id === id)?.quantity || 1
  )

export const getTotalQuantity = createSelector(
  (state: RootState) => state.cart.cartItems,
  (items) => Object.values(items).reduce((sum, cur) => (sum += cur.quantity), 0)
)

export const getTotalAmount = createSelector(
  (state: RootState) => state.cart.cartItems,
  (items) =>
    items.reduce(function (res, item) {
      return res + item.price.price * item.quantity
    }, 0)
)
