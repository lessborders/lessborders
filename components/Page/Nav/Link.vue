<template>
  <li>
    <NuxtLink
      v-if="item.type === 'link' && !item.children"
      :to="item.route ? item.route : undefined"
      :href="item.href ? item.href : undefined"
      :class="[classes, { mobileMenuToggle: mobile }]"
    >
      <i v-if="item.icon" :class="item.icon" class="me-2"></i>
      <span>{{ item.text }}</span>
    </NuxtLink>

    <div v-if="item.children">
      <NuxtLink
        :class="[
          classes,
          mobile ? 'collapsable' : 'dropdown has-megamenu dropdown-toggle',
        ]"
        class="custom-icon icon-right"
        href="#"
        :data-bs-toggle="mobile ? 'collapse' : 'dropdown'"
        :data-bs-target="'#' + encodeURI(item.text) + mobile"
      >
        {{ item.text }} <i class="fa-solid fa-angle-down"></i>
      </NuxtLink>
      <ul
        :id="encodeURI(item.text + mobile)"
        :class="mobile ? 'collapse' : 'dropdown-menu megamenu'"
        role="menu"
      >
        <PageNavLink
          v-for="(child, i) in item.children"
          :key="i"
          :item="child"
          :mobile="mobile"
          classes="dropdown-item"
        />
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    mobile: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: String,
      default: '',
    },
    item: {
      type: Object,
      default: null,
    },
  },
}
</script>
