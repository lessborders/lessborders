import { useIdentity } from '~/stores/identity'
const identity = useIdentity()

export default defineNuxtRouteMiddleware((to, from) => {
  if (!identity.isLoggedIn) {
    if (process.client) {
      let cloudBaseUrl = null
      if (
        location.hostname === 'localhost' ||
        location.hostname === '127.0.0.1'
      ) {
        cloudBaseUrl =
          window.location.protocol + '//' + window.location.hostname
        if (window.location.port) {
          cloudBaseUrl += ':5000'
        }
      } else {
        cloudBaseUrl = 'https://cloud.lessborders.com'
      }
      let toFullPath = new URL(to.fullPath, window.location.href).href
      let overridePrev = false
      if (to.name === 'auth-signin' || to.name === 'auth-signup') {
        toFullPath = new URL(from.fullPath, window.location.href).href
        overridePrev = true
      }
      const fromFullPath = new URL(from.fullPath, window.location.href).href
      let newUrl = cloudBaseUrl + '/auth/signin/?redirectUrl=' + toFullPath
      if (toFullPath !== fromFullPath || overridePrev) {
        newUrl += '&previousUrl=' + fromFullPath
      }
      window.location.href = newUrl
      return navigateTo(from.fullPath)
    }
  }
  // console.log(to, from)
})
