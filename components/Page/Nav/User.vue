<template>
  <v-btn
    v-if="!identity.isLoggedIn"
    :to="{ name: 'auth-signin' }"
    color="red"
    class="me-1"
  >
    {{ $t('pages.login.nav') }}
  </v-btn>
  <v-avatar v-else color="red" size="small" class="me-3">
    <span class="text-white">{{ identity.initials }}</span>
  </v-avatar>
</template>

<script lang="ts" setup>
import { useIdentity } from '~/stores/identity'
const identity = useIdentity()
</script>
