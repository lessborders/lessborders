<template>
  <PageBuilderNavbar>
    <template #menu>
      <div id="navbarNav" class="d-none d-lg-block">
        <!-- Desktop Menu -->
        <ul class="navbar-nav me-auto">
          <PageNavLink
            v-for="(item, i) in menus"
            :key="i"
            :item="item"
            class="nav-item"
            classes="nav-link btn btn-transparent mx-1"
          />
        </ul>
      </div>

      <!-- Mobile Toggle -->
      <a
        class="btn btn-transparent me-auto d-lg-none px-3 mobileMenuToggle custom-icon"
        rel="nofollow"
      >
        <i class="fa-solid fa-bars"></i>
      </a>

      <ul class="navbar-nav ms-auto">
        <li>
          <NuxtLink
            class="nav-link btn btn-transparent"
            aria-current="page"
            :to="{ name: 'auth-login' }"
          >
            {{ t('pages.login.nav') }}
          </NuxtLink>
        </li>
      </ul>
      <div class="d-flex">
        <SettingsButton />
      </div>

      <!-- Mobile Menu -->
      <div
        id="mobileMenu"
        class="offcanvas offcanvas-start"
        tabindex="-1"
        aria-labelledby="mobileMenuLabel"
      >
        <div class="offcanvas-header">
          <NuxtLink
            id="mobileMenuLabel"
            to="/"
            class="offcanvas-title text-body h6 mobileMenuToggle"
          >
            <img
              class="invert-dark logo"
              height="42"
              width="42"
              alt="Less Borders Logo"
              src="https://static.lessborders.com/apps/lessborders/lessborders_logo.svg"
            />
            <span class="ms-2">Less Borders</span>
          </NuxtLink>
          <button
            type="button"
            class="btn btn-transparent"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="fa-solid fa-xmark fa-lg"></i>
          </button>
        </div>
        <div class="offcanvas-body p-0">
          <ul
            id="mobileMenuList"
            class="nav flex-column"
            style="list-style: none"
          >
            <PageNavLink
              v-for="(item, i) in menus"
              :key="i"
              :item="item"
              mobile
              classes="dropdown-item"
            />
          </ul>
        </div>
      </div>
    </template>
  </PageBuilderNavbar>
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
// const app = useState<IApp>('app')
const menus = computed((): IMenuItem[] => [
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
