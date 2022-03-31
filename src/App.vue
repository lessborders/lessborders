<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{ content ? `${content} · Less Borders Media Agency` : `Less Borders Media Agency` }}</template>
    </metainfo>
    <Header/>
    <main id="page" class="d-flex col mx-auto">
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import { useMeta } from 'vue-meta';
  var winSize = '';

  export default {
    setup () {
      useMeta({
        title: 'Services for startups, professionals and creators',
        description : 'Less Borders is making it easier for startups, creators and entrepreneurs by providing services and tools to help deliver projects.',
        htmlAttrs: { lang: 'en', amp: true }
      })
    },
    mounted() {
      window.addEventListener("resize", this.detectBreakpoint);
      window.dispatchEvent(new Event('resize'));
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.detectBreakpoint);
    },
    methods: {
      detectBreakpoint() {
        var newWinSize = 'mobile'; // default value, check for actual size
        if (window.innerWidth >= 992) {
            newWinSize = 'desktop';
        }else if (window.innerWidth >= 576){
            newWinSize = 'tablet';
        }

        if( newWinSize != winSize ) {
					document.body.setAttribute("data-breakpoint", newWinSize);
            winSize = newWinSize;
        }
      }
    },
    name: "App"
  };
</script>