import { createRouter, createWebHistory } from "vue-router";

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
  console.log({to, from});
  window.scrollTo(0, 0)
  next();
});