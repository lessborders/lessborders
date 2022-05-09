<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <h1>404</h1>

      <p>Oops. Nothing here...</p>

      <q-btn class="q-mt-xl" color="primary" unelevated to="/" no-caps>
        Take me back
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '404Error',
})
</script>
