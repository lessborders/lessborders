<template>
  <div v-if="!loaded" class="loader d-flex">
    <div class="ma-auto pb-10">
      <v-progress-linear
        color="red"
        indeterminate
        rounded
        height="6"
        class="mb-2"
      ></v-progress-linear>
      {{ loadingText }}
    </div>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    loadingText: {
      type: String,
      default: '',
    },
    loaded: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.loader {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  background: var(--lb-body-bg);
}
</style>
