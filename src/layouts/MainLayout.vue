<template>
  <q-layout>
    <UserStats :user="user.user" />

    <br /><br />
    <q-page-container>
      <q-btn @click="user.addChips(100), user.addExp(25)">Add Chips</q-btn>
      <q-btn @click="user.removeChips(100), user.addExp(10)">
        Remove Chips
      </q-btn>
      <br /><br />
      <q-btn @click="user.removeChips(100), user.addBank(1)">Sell Chips</q-btn>
      <q-btn @click="user.addChips(100), user.removeBank(1)">Buy Chips</q-btn>
      <router-view />
    </q-page-container>

    <q-drawer
      v-model="menuOpen"
      side="right"
      bordered
      overlay
      behavior="mobile"
    >
      <!-- drawer content -->
    </q-drawer>

    <q-footer class="bg-dark fixed">
      <q-toolbar class="items-center justify-evenly">
        <router-link to="/shop">
          <q-btn flat round icon="fa-regular fa-store"> </q-btn>
        </router-link>

        <router-link to="/play">
          <q-btn
            size="lg"
            flat
            round
            icon="fa-regular fa-cards"
            class="main-btn"
          ></q-btn>
        </router-link>

        <q-btn @click="toggleMenu" flat round>
          <q-avatar size="sm" color="primary"> BB</q-avatar>
        </q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Cookies } from 'quasar'
import { useUser } from '../stores/user'
import UserStats from '../components/UserStats.vue'

const user = useUser()
const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>
