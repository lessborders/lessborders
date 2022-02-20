<template>
  <nav
    class="navbar navbar-expand-lg sticky-top card-bg"
    :class="{ 'navbar--hidden': !showNavbar }"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img class="invert-dark logo" height="48" width="48" alt="Less Borders Logo" src="https://static.lessborders.com/apps/lessborders/lessborders_logo.svg"/>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item dropdown has-megamenu">
            <a class="nav-link dropdown-toggle custom-icon" href="#" data-bs-toggle="dropdown">Services <i class="fa-duotone fa-circle-chevron-down"></i></a>
            <div class="dropdown-menu megamenu" role="menu">
            </div>
          </li>
        </ul>
      </div>

      <div class="d-flex">
        <ul class="nav">
          <li class="nav-item">
            <darkToggle/>
          </li>
          <li class="nav-item dropdown has-megamenu me-2">
            <productDropdown/>
          </li>
          <li class="nav-item">
            <div class="btn btn-primary" aria-current="page" href="#">Sign in</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition < 0) {
        return;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>