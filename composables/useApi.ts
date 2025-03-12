import type { QueryFunction, QueryKey } from '@tanstack/vue-query'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}
export const getApiTest: QueryFunction<Post[], QueryKey> = async (params) => {
  console.log('params', params.queryKey[1])
  return (
    await fetch('https://jsonplaceholder.typicode.com/posts').then((c) =>
      c.json()
    )
  )?.[0]
}

export type SetApiUserLoginParams = {
  account: string
  password: string
}
export const setApiUserLogin = async (params: SetApiUserLoginParams) => {
  const config = useRuntimeConfig()
  const _response = await fetch(`${config.public.BACKEND_URL}/api/test`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(params),
  })

  /*  if (!_response.ok) {
    throw new Error('Error')
  } */

  return await _response.json()
}

export type SetApiProfileUpdateParams = {
  nickName: string
  email: string
}
export const setApiProfileUpdate = async (
  params: SetApiProfileUpdateParams
) => {
  const config = useRuntimeConfig()
  const _response = await fetch(`${config.public.BACKEND_URL}/api/test`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })

  /* if (!_response.ok) {
    throw new Error('Error')
  } */

  return await _response.json()
}
