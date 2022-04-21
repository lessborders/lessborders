export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token', { path: '/' })
  if (to.query.token) {
    token.value = to.query.token || null
  }
})
