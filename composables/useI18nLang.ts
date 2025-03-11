export const useI18nLang = () => {
  const { t, setLocale } = useI18n()

  const objLangDemo = reactive({
    welcome: t('welcome'),
    greeting: (params = '') => t('greeting', { name: params }),
  })

  const objLangUserLogin = reactive({
    login: t('login'),
  })

  const setLocaleToUS = () => setLocale('en-US')

  const setLocaleToTW = () => setLocale('zh-TW')

  return {
    objLangDemo,
    objLangUserLogin,
    setLocaleToUS,
    setLocaleToTW,
  }
}
