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
        <!--<slot name="footer">
          <PageFooter />
        </slot>-->
      </div>
      <slot name="app-after" />
      <div id="app-after"></div>

      <canvas id="unity-canvas" class="unity-canvas flex-grow-1"></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
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
        this.$el.classList.add('isLoggedIn')
        const canvas = this.$el.querySelector('#unity-canvas')
        const loadingBar = this.$el.querySelector('#unity-loading-bar')
        const progressBarFull = this.$el.querySelector(
          '#unity-progress-bar-full'
        )

        const buildUrl = '/Build'
        const loaderUrl = buildUrl + '/test.loader.js'
        const config = {
          dataUrl: buildUrl + '/test.data.gz',
          frameworkUrl: buildUrl + '/test.framework.js.gz',
          codeUrl: buildUrl + '/test.wasm.gz',
          streamingAssetsUrl: 'StreamingAssets',
          companyName: 'DefaultCompany',
          productName: 'My project (2)',
          productVersion: '1.0.2',
        }

        if (canvas) {
          canvas.style.width = '300px'
          canvas.style.height = '200px'
          loadingBar.style.display = 'block'

          const script = document.createElement('script')
          script.src = loaderUrl
          script.onload = () => {
            createUnityInstance(canvas, config, (progress) => {
              progressBarFull.style.width = 100 * progress + '%'
            })
              .then((unityInstance) => {
                setTimeout(() => {
                  this.isLoaded = true
                }, 2000)
              })
              .catch((message) => {})
          }
          document.body.appendChild(script)
        }
      })
    }
  },
}
</script>
