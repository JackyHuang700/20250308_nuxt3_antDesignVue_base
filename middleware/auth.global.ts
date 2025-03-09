export default defineNuxtRouteMiddleware((to, /* from */ _) => {
  if (to.path === '/login') {
    return
  }

  const _unAuthenticated = getCheckAuthStatus()

  const _canRun = false
  if (_canRun && _unAuthenticated) {
    return navigateTo('/login')
  }
})

function getCheckAuthStatus() {
  // const token = localStorage.getItem('auth_token')
  const token = ''
  return !token
}
