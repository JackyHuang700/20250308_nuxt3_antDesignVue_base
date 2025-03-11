export const useI18nLang = () => {
  const { t, setLocale } = useI18n()

  const objLangDemo = reactive({
    welcome: t('welcome'),
    greeting: (params = '') => t('greeting', { name: params }),
  })

  const objLangCommon = reactive({
    update_data: t('update_data'),
    true: t('true'),
    false: t('false'),
  })

  const objLangUserLogin = reactive({
    login: t('login'),
    login_account_placeholder: t('login_account_placeholder'),
    login_password_placeholder: t('login_password_placeholder'),
    login_password_can_show_password_tooltip: t(
      'login_password_can_show_password_tooltip'
    ),
    login_remember_me: t('login_remember_me'),
  })

  const objLangProfile = reactive({
    profile_setting: t('profile_setting'),
    profile_msg: t('profile_msg'),
    profile_preference_setting: t('profile_preference_setting'),
    profile_security_log: t('profile_security_log'),
    logout: t('logout'),
  })

  const setLocaleToUS = () => setLocale('en-US')

  const setLocaleToTW = () => setLocale('zh-TW')

  return {
    objLangDemo,
    objLangCommon,
    objLangUserLogin,
    objLangProfile,
    setLocaleToUS,
    setLocaleToTW,
  }
}
