import { z } from 'zod'

export const UserLoginSchema = z.object({
  account: z.string().min(3, '使用者名稱至少需要 3 個字元'),
  password: z.string().min(3, '密碼至少需要 3 個字元'),
})

export const ProfileUpdateSchema = z.object({
  nickName: z.string().min(2, '暱稱至少需要 2 個字元').nonempty('暱稱不可為空'),
  email: z.string().email('請輸入正確的 Email 格式'),
})

// clear all errors
type setClearErrors = (
  errorsObj: Record<string, string | undefined>
) => Promise<Record<string, string | undefined>>

export const setClearErrors: setClearErrors = (errorsObj) => {
  return new Promise((resolve) => {
    Object.keys(errorsObj).forEach((key) => {
      errorsObj[key as keyof typeof errorsObj] = undefined
    })
    resolve(errorsObj)
  })
}

// set errors
type SetAddErrors = (errorIssues: z.ZodIssue[]) => Record<string, string>
export const setAddErrors: SetAddErrors = (errorIssues) => {
  const errors: Record<string, string> = {}
  errorIssues.forEach((_error) => {
    if (_error.path) {
      errors[_error.path[0] as string] = _error.message
    }
  })
  return errors
}
