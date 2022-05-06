<template>
  <div>
    <!-- Navbar -->
    <v-app-bar style="width: 100%">
      <NuxtLink to="/" class="logo my-auto me-2">
        <img
          class="inverted"
          src="https://static.lessborders.com/apps/lessborders/lessborders_logo.svg"
        />
      </NuxtLink>
      <div class="nav-container">
        <PageNavLink v-for="(item, i) in menu" :key="i" :item="item" />
      </div>
      <div class="ms-auto">
        <PageNavUser />

        <!--<v-btn
          size="small"
          icon="fa-regular fa-sliders"
          @click.stop="preferenceMenu = !preferenceMenu"
        />-->
      </div>
    </v-app-bar>

    <!-- Preference Menu -->
    <v-navigation-drawer
      v-model="preferenceMenu"
      temporary
      rounded
      position="right"
      width="380"
    >
      <v-toolbar>
        <v-toolbar-title class="me-auto">
          {{ $t('components.settings.title') }}
        </v-toolbar-title>
        <v-btn
          size="small"
          icon="fa-regular fa-times"
          @click.stop="preferenceMenu = !preferenceMenu"
        />
      </v-toolbar>
      <SettingsMenu />
    </v-navigation-drawer>
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
    text: t('pages.index.title'),
    route: { name: 'index' },
    icon: 'fa-regular fa-home',
  },
  {
    type: 'link',
    text: t('pages.index.title'),
    route: { name: 'search' },
    icon: 'fa-regular fa-cards',
  },
  {
    type: 'link',
    text: t('pages.index.title'),
    route: { name: 'store' },
    icon: 'fa-regular fa-store',
  },
])
</script>

<script lang="ts">
export default {
  data() {
    return {
      mainMenu: false,
      preferenceMenu: false,
    }
  },
}
</script>
