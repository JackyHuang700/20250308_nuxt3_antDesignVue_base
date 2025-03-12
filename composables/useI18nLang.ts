export const useI18nLang = () => {
  const { t, setLocale } = useI18n()

  const objLangDemo = computed(() => {
    return {
      welcome: t('welcome'),
      greeting: (params = '') => t('greeting', { name: params }),
    }
  })

  const objLangCommon = computed(() => {
    return {
      update_data: t('update_data'),
      true: t('true'),
      false: t('false'),
    }
  })

  const objLangUserLogin = computed(() => {
    return {
      login: t('login'),
      login_account_placeholder: t('login_account_placeholder'),
      login_password_placeholder: t('login_password_placeholder'),
      login_password_can_show_password_tooltip: t(
        'login_password_can_show_password_tooltip'
      ),
      login_remember_me: t('login_remember_me'),
    }
  })

  const objLangProfile = computed(() => {
    return {
      profile_setting: t('profile_setting'),
      profile_msg: t('profile_msg'),
      profile_preference_setting: t('profile_preference_setting'),
      profile_security_log: t('profile_security_log'),
      logout: t('logout'),
    }
  })

  const objLangPagination = computed(() => {
    return {
      pagination_show_total: (total: string | number) =>
        t('pagination_show_total', { total }),
      pagination_items_per_page: t('pagination_items_per_page'),
      pagination_jump_to: t('pagination_jump_to'),
      pagination_page: t('pagination_page'),
      pagination_prev_page: t('pagination_prev_page'),
      pagination_next_page: t('pagination_next_page'),
    }
  })

  const setLocaleToUS = () => setLocale('en-US')

  const setLocaleToTW = () => setLocale('zh-TW')

  return {
    objLangDemo,
    objLangCommon,
    objLangUserLogin,
    objLangProfile,
    objLangPagination,
    setLocaleToUS,
    setLocaleToTW,
  }
}
