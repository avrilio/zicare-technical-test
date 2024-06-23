<template>
  <div class="bg-[#1e2235] min-h-screen p-2">
    <Navbar/>
    <div class="flex">
      <Sidebar/>
      <router-view/>
    </div>
  </div>
</template>

<script setup>

import Navbar from './components/navbar.vue';
import Sidebar from './components/sidebar.vue';

</script>

<style scoped>

</style>
