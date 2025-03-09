export function useLayoutCollapsed() {
  const isCollapsed = useState('isCollapsed', () => false)

  return {
    isCollapsed,
  }
}
