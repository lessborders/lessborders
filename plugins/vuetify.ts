import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
  })
  nuxtApp.vueApp.use(vuetify)
})
