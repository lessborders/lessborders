<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="d-flex flex-column m-vh-100">
      <slot name="header">
        <PageNavbar />
      </slot>
      <main id="page" class="d-flex col mx-auto">
        <slot />
      </main>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>

<script setup>
const route = useRoute()

if (!route.meta.title) {
  route.meta.title = 'Services for startups, professionals and creators'
}

useMeta({
  title: computed(() => `${route.meta.title} - Less Borders Media Agency`),
})
</script>
