import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import EnvDemo from '@/components/env-demo.vue'
import I18nDemo from '@/components/i18n-demo.vue'
import PiniaDemo from '@/components/pinia-demo.vue'
import VueQueryDemo from '@/components/vue-query-demo.vue'
import ZodDemo from '@/components/zod-demo.vue'

import type { CustomTabsPane } from '~/types/types'
import type { MenuProps } from 'ant-design-vue'

export const strActiveTab = ref<CustomTabsPane['key']>('/')
export const objArrTabs = ref<CustomTabsPane[]>([])
export const strArrMenuSelectedKeys = ref<CustomTabsPane['key'][]>(['/'])
export const strArrMenuOpenKeys = ref<CustomTabsPane['key'][]>([])

export const useCustomTabsPane = () => {
  const route = useRoute()
  const router = useRouter()

  const getAllTabs = () => {
    return [
      {
        // key: 'admin-index-page',
        key: '/',
        title: 'admin-index',
        path: '/',
        menuOpenKeys: ['/'],
        closable: false,
      },
      {
        // key: 'env-demo-page',
        key: '/demo/env-demo',
        title: 'env-demo',
        path: '/demo/env-demo',
        menuOpenKeys: ['/demo/env-demo'],
        closable: true,
        component: EnvDemo,
      },
      {
        // key: 'pinia-demo-page',
        key: '/demo/pinia-demo',
        title: 'pinia-demo',
        path: '/demo/pinia-demo',
        menuOpenKeys: ['/demo/pinia-demo'],
        closable: true,
        component: PiniaDemo,
      },
      {
        // key: 'vue-query-demo-page',
        key: '/demo/vue-query-demo',
        title: 'vue-query-demo',
        path: '/demo/vue-query-demo',
        menuOpenKeys: [],
        closable: true,
        component: VueQueryDemo,
      },
      {
        // key: 'zod-demo-page',
        key: '/demo/zod-demo',
        title: 'zod-demo',
        path: '/demo/zod-demo',
        menuOpenKeys: ['sub2', 'sub3', '/demo/zod-demo'],
        closable: true,
        component: ZodDemo,
      },
      {
        // key: 'i18n-demo-page',
        key: '/demo/i18n-demo',
        title: 'i18n-demo',
        path: '/demo/i18n-demo',
        menuOpenKeys: [],
        closable: true,
        component: I18nDemo,
      },
    ]
  }

  const getObjArrTabsView = (): CustomTabsPane[] => {
    const _getAllTabs = getAllTabs()
    const _getAllTabsIndex = _getAllTabs.find((c) => c.key === '/')
    const _getAllTabsExcludeIndex = _getAllTabs.filter((c) => c.key !== '/')
    let _result = [_getAllTabsIndex as CustomTabsPane]
    const _canTest = false

    if (_canTest) {
      _result = _result.concat(_getAllTabsExcludeIndex)
    }

    return _result
  }

  const getDefaultTabsExcludeComponent = () =>
    getObjArrTabsView().map((c) => {
      const { component, ...rest } = c
      return rest
    })

  const setAddObjArrTabs = (key: CustomTabsPane['key']) => {
    const _isExist = objArrTabs.value.some((c) => c.key === key)
    if (_isExist) {
      strActiveTab.value = key
      router.push(key)
      return
    }

    const _obj = getAllTabs().find((c) => c.key === key)
    delete _obj?.component
    if (!_obj) {
      return
    }

    objArrTabs.value.push(_obj)
    strActiveTab.value = key
    router.push(key)
  }

  const setRemoveObjArrTabs = (key: CustomTabsPane['key']) => {
    const _length = objArrTabs.value.length

    if (_length === 1) {
      return
    }

    const _objArrTabs = objArrTabs.value.filter((c) => c.key !== key)
    objArrTabs.value = _objArrTabs
  }

  const setInitActiveTabAndMenuSelectedKeys = () => {
    const _path = route.path
    const _tab = getAllTabs().find((c) => c.key === _path)

    if (_tab) {
      const { component: _, ...rest } = _tab

      strActiveTab.value = _path
      // objArrTabs.value.push(rest) // !! don't delete it !!
      Object.assign(objArrTabs.value, [rest])
      strArrMenuSelectedKeys.value = [_path]
      strArrMenuOpenKeys.value = [..._tab.menuOpenKeys]
    }
  }

  // Tab change go routing
  const onTabsChange = (key: CustomTabsPane['key']) => {
    const _targetTab = objArrTabs.value.find((tab) => tab.key === key)
    if (_targetTab) {
      strArrMenuSelectedKeys.value = [_targetTab.path]
      strArrMenuOpenKeys.value = [..._targetTab.menuOpenKeys]
      router.push(_targetTab.path)
    }
  }

  // Tab remove or add
  const onTabsRemoveOrAdd = (
    targetKey: CustomTabsPane['key'],
    action: 'remove'
  ) => {
    if (action === 'remove') {
      const index = objArrTabs.value.findIndex((tab) => tab.key === targetKey)

      if (index > -1) {
        // objArrTabs.value.splice(index, 1)
        setRemoveObjArrTabs(targetKey)
      }

      // 如果關閉的是當前活躍頁籤，跳轉到上一個頁籤
      // if (strActiveTab.value === targetKey && objArrTabs.value.length > 0) {
      //   const newActiveTab = objArrTabs.value[index - 1] || objArrTabs.value[0]
      //   router.push(newActiveTab.path)
      // }
      if (objArrTabs.value.length > 0) {
        const _lastTabs = objArrTabs.value.at(-1)
        if (_lastTabs) {
          strActiveTab.value = _lastTabs.key
          router.push(_lastTabs.path)
        }
      }
    }
  }

  const onMenuClick: MenuProps['onClick'] = (e) => {
    setAddObjArrTabs(e.key as CustomTabsPane['key'])
  }

  return {
    getObjArrTabsView,
    getDefaultTabsExcludeComponent,
    setAddObjArrTabs,
    setRemoveObjArrTabs,
    setInitActiveTabAndMenuSelectedKeys,
    onTabsChange,
    onTabsRemoveOrAdd,
    onMenuClick,
  }
}
