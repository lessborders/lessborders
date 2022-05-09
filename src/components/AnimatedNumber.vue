<template>
  <div>
    <transition name="numberchange" mode="in-out">
      <div
        v-if="difference != 0"
        class="numberchanger absolute-top-right q-mr-sm"
        :class="difference > 0 ? 'text-green' : 'text-red'"
        :key="currentValue"
      >
        <span v-if="difference > 0">+ </span>
        {{ difference }}
      </div>
    </transition>
    {{ CHIPS.format(currentValue) }}
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from '@vue/reactivity'
const props = defineProps({
  currentValue: Number,
})

let oldValue = ref(props.currentValue)
let difference = ref(0)

let currentValue = computed(() => {
  oldValue.value = currentValue.value || 0
  const newValue = props.currentValue
  const getDifference = newValue - oldValue.value
  if (getDifference != 0) {
    difference.value = getDifference
  }
  return newValue
})

let CHIPS = Intl.NumberFormat('en-US')
</script>
