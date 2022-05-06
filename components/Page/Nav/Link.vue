<template>
  <v-btn
    size="small"
    color="grey"
    :to="item.route ? item.route : undefined"
    :href="item.href ? item.href : undefined"
    :class="classes"
    :icon="item.icon"
    nuxt
  >
  </v-btn>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    classes: {
      type: String,
      default: '',
    },
    item: {
      type: Object,
      default: null,
    },
  },
}
</script>
