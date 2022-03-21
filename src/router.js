import { createRouter, createWebHistory } from "vue-router";
import store from "./store"

const Home = () => import(/* webpackChunkName: "home" */ './pages/Home.vue');
const LegalNotice = () => import(/* webpackChunkName: "home" */ './pages/Legal/LegalNotice.vue');
const PrivacyPolicy = () => import(/* webpackChunkName: "home" */ './pages/Legal/PrivacyPolicy.vue');
const TermsService = () => import(/* webpackChunkName: "home" */ './pages/Legal/TermsService.vue');
const ContactUs = () => import(/* webpackChunkName: "home" */ './pages/Support/ContactUs.vue');

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/auth/signin",
      name: "login",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/legal",
      name: "legal",
      component: LegalNotice,
    },
    {
      path: "/legal/privacy",
      name: "privacy",
      component: PrivacyPolicy,
    },
    {
      path: "/legal/terms",
      name: "terms",
      component: TermsService,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactUs,
    },
  ],
});

router.beforeEach((to, from, next) => {
  let toFullPath = new URL(to.fullPath, window.location.href).href
  let overridePrev = false
  if(to.name == "login") {
    toFullPath = new URL(from.fullPath, window.location.href).href
    overridePrev = true
  }
  const fromFullPath = new URL(from.fullPath, window.location.href).href
  let newUrl = null
  // requires auth, check if logged in
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // if not authorized, redirect to login page.
    if (!store.state.isLoggedIn) {
      console.log(store.state.isUserLoggedIn)
      newUrl = 'https://cloud.lessborders.com/auth/signin/?redirect_url=' + toFullPath
      if(toFullPath != fromFullPath || overridePrev) {
        newUrl += '&previous_url=' + fromFullPath
      }
      window.location.href = newUrl
    } else {
      next() // go to wherever I'm going
      window.scrollTo(0, 0)
    }
  } else if (to.matched.some(record => record.meta.hideForAuth)) {
    // if authorized, redirect to home page.
    if (store.state.isLoggedIn) {
      next({ name: 'home' })
      window.scrollTo(0, 0)
    } else {
      next() // go to wherever I'm going
      window.scrollTo(0, 0)
    }
  } else {
    next()
    window.scrollTo(0, 0)
  }
});