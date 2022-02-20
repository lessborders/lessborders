<template>
  <div>
      <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content} · less borders` : `less borders` }}</template>
      </metainfo>
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import { useMeta } from 'vue-meta';

  export default {
    setup () {
      useMeta({
        title: 'Startup and professional career solutions - work smarter',
        htmlAttrs: { lang: 'en', amp: true }
      })
    },
    name: "App"
  };
</script>