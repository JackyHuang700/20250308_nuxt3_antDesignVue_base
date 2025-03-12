import { useI18nLang } from '@/composables/useI18nLang'

import type { PaginationProps } from 'ant-design-vue'

export const useAntPagination = () => {
  const { objLangPagination } = useI18nLang()

  const objPaginationProps = ref<PaginationProps>({
    current: 1,
    pageSize: 10,
    total: 100,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange(page, pageSize) {
      Object.assign(objPaginationProps.value, {
        current: page,
        pageSize,
      })
    },
    onShowSizeChange(current, size) {
      Object.assign(objPaginationProps.value, {
        current,
        pageSize: size,
      })
    },
    showTotal: (total) => {
      return objLangPagination.pagination_show_total(total)
    },
    locale: {
      items_per_page: objLangPagination.pagination_items_per_page,
      jump_to: objLangPagination.pagination_jump_to,
      page: objLangPagination.pagination_page,
    },
  })

  return {
    objPaginationProps,
  }
}
