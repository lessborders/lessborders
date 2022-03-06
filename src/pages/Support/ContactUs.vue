<template>
  <div class="page-container mb-auto">
      <div class="container py-4">
        <div>
            <h1>Contact us</h1>
        </div>
      </div>
  </div>
</template>

<script>
  import { useMeta } from 'vue-meta';
  
  export default {
    setup () {
      useMeta({
        title: 'Contact us',
        description : '',
      })
    },
    name: "Contact us"
  };
</script>
