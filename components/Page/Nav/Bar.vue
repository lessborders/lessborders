<template>
  <div>
    <!-- Navbar -->
    <v-app-bar style="width: 100%">
      <v-chip class="ms-auto me-3 shiny-border-purple" color="blue">
        <img
          class="prepend-img"
          src="https://static.lessborders.com/assets/img/icons/gem.png"
        />
        <span class="text-blue"> {{ gems }} </span>
      </v-chip>
      <v-chip class="me-3 shiny-border-orange" color="white">
        <img
          class="prepend-img"
          src="https://static.lessborders.com/assets/img/icons/gold.png"
        />
        <span class="text-orange"> {{ coins }} </span>
      </v-chip>

      <PageNavUser />
    </v-app-bar>
  </div>
</template>

<script lang="ts" setup>
import { IApp } from '~/utils/app'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  icon?: string
  href?: any
  route?: any
  active?: boolean
  children?: any
}

const { t } = useLang()

const menu = computed((): IMenuItem[] => [
  {
    type: 'link',
    text: t('pages.services.branding.nav'),
    route: { name: 'services-branding' },
  },
  {
    type: 'link',
    text: t('pages.services.websites.nav'),
    route: { name: 'services-websites' },
  },
  {
    type: 'link',
    text: t('pages.services.design.nav'),
    route: { name: 'services-design' },
  },
  {
    type: 'link',
    text: t('pages.services.media.nav'),
    route: { name: 'services-media' },
  },
])
</script>

<script lang="ts">
export default {
  data() {
    return {
      mainMenu: false,
      preferenceMenu: false,
      coins: 0,
      gems: 0,
    }
  },
}
</script>
