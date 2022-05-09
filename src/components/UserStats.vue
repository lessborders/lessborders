<template>
  <div id="stats">
    <router-link to="/shop">
      <q-chip color="dark" text-color="white">
        <q-avatar color="dark" size="md">
          <q-icon
            color="primary"
            floating
            name="fa-solid fa-coin-front"
          ></q-icon>
        </q-avatar>
        <AnimatedNumber :currentValue="user?.chips" />
      </q-chip>
    </router-link>

    <q-chip v-if="user?.bank > 0" color="dark" text-color="white">
      <q-avatar color="dark" size="md">
        <q-icon color="secondary" floating name="fa-solid fa-dollar"></q-icon>
      </q-avatar>
      <AnimatedNumber :currentValue="user?.bank" />
    </q-chip>

    <q-circular-progress
      show-value
      :value="calculateLevelProgress(user?.exp)"
      size="40px"
      color="orange-3"
    >
      <q-avatar color="dark" text-color="white" size="md">
        <q-icon class="top" color="orange" name="fa-solid fa-star"></q-icon>
        <div style="font-size: 14px">{{ calculateLevel(user?.exp) }}</div>
      </q-avatar>
    </q-circular-progress>
  </div>
</template>

<script lang="ts" setup>
import { calculateLevel, calculateLevelProgress } from '../utils/user'
import AnimatedNumber from './AnimatedNumber.vue'

const props = defineProps({
  user: Object,
})

let USD = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
})
</script>
