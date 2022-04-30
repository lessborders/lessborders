export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token', { path: '/' })
  if (to.query.token) {
    token.value = to.query.token
  }
})
