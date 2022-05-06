<template>
  <v-list>
    <v-list-group>
      <template #activator="{ props }">
        <v-list-item v-bind="props" :append-icon="null" nuxt>
          {{ $t('components.language_switcher.change_language') }}
          <small class="ms-auto my-auto">
            ({{ $t('components.language_switcher.' + localeSetting) }})
          </small>
        </v-list-item>
      </template>
      <SettingsLocaleSwitcher />
    </v-list-group>
  </v-list>
</template>

<script lang="ts" setup>
const localeSetting = useState<string>('locale.setting')
</script>
