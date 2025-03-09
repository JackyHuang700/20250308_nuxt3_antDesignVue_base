import type { QueryFunction, QueryKey } from '@tanstack/vue-query'

// const config = useRuntimeConfig()
// config.public.BACKEND_URL

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
