<template>
  <div class="page-container mb-auto">
      <div class="container py-4">
        <div>
            <h1>Privacy Policy</h1>
        </div>
      </div>
  </div>
</template>

<script>
  import { useMeta } from 'vue-meta';
  
  export default {
    setup () {
      useMeta({
        title: 'Privacy Policy',
        description : '',
      })
    },
    name: "Privacy Policy"
  };
</script>
