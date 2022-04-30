<template>
  <VApp>
    <Loader :loading-text="loadingText" :loaded="isLoaded">
      <slot name="app-before" />
      <div id="app-before"></div>
      <div class="d-flex flex-column m-vh-100">
        <slot name="header">
          <PageNavBar />
        </slot>
        <main id="page" class="d-flex flex-grow-1 my-auto">
          <slot />
        </main>
        <slot name="footer">
          <PageFooter />
        </slot>
      </div>
      <slot name="app-after" />
      <div id="app-after"></div>
    </Loader>
  </VApp>
</template>

<script lang="ts" setup>
import { useIdentity } from '~/stores/identity'
const identity = useIdentity()
const route = useRoute()
const { t } = useLang()

if (!route.meta.title) {
  route.meta.title = 'Services for startups, professionals and creators'
}

let loadingText = t('loading.app')

// console.log(route.meta)

useMeta({
  title: computed(() => `${route.meta.title} · Less Borders Media Agency`),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        route.meta.description ||
        'Less Borders is making it easier for startups, creators and entrepreneurs by providing services and tools to help deliver projects.',
    },
  ],
})
</script>

<script lang="ts">
export default {
  data() {
    return {
      loadingText: this.loadingText,
      isLoaded: false,
    }
  },
  mounted() {
    this.isLoaded = true
    const token = useCookie('token', { path: '/' })
    if (token.value && !this.identity.isLoggedIn) {
      this.isLoaded = false
      this.identity.login(token.value).then(() => {
        this.isLoaded = true
      })
    }
  },
}
</script>
