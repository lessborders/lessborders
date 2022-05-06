<template>
  <Html :lang="locale">
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app'
AppSetup()
const locale = useState<string>('locale.setting')

definePageMeta({
  layout: 'page',
})
</script>
