<template>
  <div class="page-container d-flex flex-grow-1 flex-column">
    <v-container fluid>
      <div class="grid cols-4">
        <v-card rounded class="shiny-border-light pa-4 text-center">
          <img
            src="https://static.lessborders.com/assets/img/icons/golds.png"
          />
          <h4>10 Coins</h4>
          <v-card-text>10 golden coins</v-card-text>
          <v-card-actions>
            <v-btn
              contained
              color="purple"
              rounded
              class="mx-auto"
              prepend-icon="fa-regular fa-dollar-sign"
            >
              1,99
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
  title: 'Services for startups, professionals and creators',
  description:
    'Less Borders is making it easier for startups, creators and entrepreneurs by providing services and tools to help deliver projects.',
})
</script>

<script lang="ts">
export default {
  mounted() {},
}
</script>
