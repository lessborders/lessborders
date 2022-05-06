<template>
  <div>
    <transition name="fade">
      <div v-if="!loaded" class="loader d-flex">
        <div class="ma-auto pb-10 text-center">
          <div class="logo mb-3">
            <img
              class="inverted"
              src="https://static.lessborders.com/apps/lessborders/lessborders_logo.svg"
            />
          </div>
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
    </transition>
    <div if="loaded">
      <slot></slot>
    </div>
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
  background: var(--lb-black);
  color: #ffffff;
  z-index: 9999;
}
</style>
