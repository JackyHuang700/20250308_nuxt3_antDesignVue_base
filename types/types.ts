import type { TabPaneProps } from 'ant-design-vue'

export type CustomTabsPane = {
  key: string
  title: string
  path: string
  closable: TabPaneProps['closable']
  menuOpenKeys: string[]
  component?: unknown
}
