/*
 * @Author: Innei
 * @Date: 2020-06-04 10:56:58
 * @LastEditTime: 2020-06-04 11:04:13
 * @LastEditors: Innei
 * @FilePath: /House-Backend/src/utils/cookie.ts
 * @Coding with Love
 */
import Cookie from 'js-cookie'

export const getAuthCookie = () => {
  const payload = Cookie.get('paul-pwd') as any
  try {
    const data = JSON.parse(payload)
    return data
  } catch {
    return null
  }
}

export const setAuthCookie = (payload: any, expires?: number) => {
  return Cookie.set('paul-pwd', JSON.stringify(payload), { expires })
}
