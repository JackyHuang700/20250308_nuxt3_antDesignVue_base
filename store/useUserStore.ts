import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'useUserStore',
  () => {
    const strToken = ref('Hi! JK')
    const setStrToken = (params: string) => (strToken.value = params)

    return {
      strToken,
      setStrToken,
    }
  },
  {
    persist: true,
  }
)
