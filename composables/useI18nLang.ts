export const useI18nLang = () => {
  const { t, setLocale } = useI18n()

  const objLangDemo = reactive({
    welcome: t('welcome'),
  })

  return {
    objLangDemo,
  }
}
