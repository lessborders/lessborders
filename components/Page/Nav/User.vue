<template>
  <v-btn v-if="!identity.isLoggedIn" :to="{ name: 'auth-signin' }" color="red">
    {{ $t('pages.login.nav') }}
  </v-btn>
  <span v-else class="d-flex">
    <div class="my-auto ms-3">
      <v-btn rounded color="orange" prepend-icon="fa-solid fa-star">
        <span class="text-white me-3">{{ level }}</span>
        <v-progress-linear
          v-model="progress"
          color="orange"
          style="width: 40px"
        >
        </v-progress-linear>
      </v-btn>
    </div>
    <v-btn
      rounded
      color="red"
      class="ms-3"
      prepend-icon="fa-solid fa-coin-front"
    >
      <span class="text-white">{{ chips }}</span>
    </v-btn>
  </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useIdentity } from '~/stores/identity'
const identity = useIdentity()
const chips = ref(0)
const level = ref(1)
const exp = ref(5)
const tnl = level.value * 20
const progress = (exp.value / tnl) * 100
</script>
