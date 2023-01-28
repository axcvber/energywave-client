import { getCookie as getNextCookie, setCookie as setNextCookie, deleteCookie as deleteNextCookie } from 'cookies-next'
import { OptionsType } from 'cookies-next/lib/types'

export enum CookieName {
  CARD = 'CARD',
}

export function getCookie(key: string, options?: OptionsType | undefined) {
  let result = []
  if (key) {
    const localData: any = getNextCookie(key, options)
    if (localData && localData.length > 0) {
      result = JSON.parse(localData)
    }
  }

  return result
}

export function setCookie(key: string, value: any) {
  setNextCookie(key, JSON.stringify(value), { maxAge: 60 * 60 * 24 }) //1 month
}

export function deleteCookie(key: string) {
  deleteNextCookie(key)
}
