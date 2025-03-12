import { strActiveTab } from '@/composables/useCustomTabsPane'

import type { CustomTabsPane } from '~/types/types'

export const useBreadcrumb = () => {
  const { t } = useI18n()

  const objArrAllBreadcrumb = computed(() => [
    {
      key: '/demo/i18n-demo',
      items: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: t('welcome'),
          href: undefined,
        },
        {
          href: '',
        },
      ],
    },
  ])

  const objArrBreadcrumb = computed(() => {
    return objArrAllBreadcrumb.value.filter(
      (_breadcrumb) => _breadcrumb.key === strActiveTab.value
    )
  })

  return {
    objArrBreadcrumb,
  }
}

type ObjArrBreadcrumb = {
  key: CustomTabsPane['key']
  items: ObjArrBreadcrumbItem[]
}

export type ObjArrBreadcrumbItem = {
  label: string
  href?: string
}
