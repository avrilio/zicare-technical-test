<template>
    <nav class="border-2 rounded-2xl border-zihub-border bg-zihub-background mb-3">
      <div class="flex items-center justify-between p-4">
        <a href="#" class="flex items-center px-2">
          <span class="text-2xl font-semibold text-sky-400">Zihub</span>
        </a>
        <div class="flex">
          <ul class="flex flex-row border-r-2 border-zihub-border font-medium gap-3 pl-2 pr-4 ">
            <li>
              <button @click="toggleFullscreen" class="small-button">
                <font-awesome-icon v-if="!isFullscreen" icon="fa-solid fa-expand" />
                <font-awesome-icon v-else icon="fa-solid fa-compress" />
              </button>
            </li>
            <li>
              <a class="small-button"><font-awesome-icon icon="fa-regular fa-moon" /></a>
            </li>
            <li>
              <a class="relative small-button">
                <span v-if="isNotification" class="absolute top-0 right-0 bg-red-500 rounded-full w-3 h-3"></span>
                <font-awesome-icon icon="fa-regular fa-bell" />
              </a>
            </li>
          </ul>
          <ul class="flex flex-row font-medium rounded-lg gap-3 pl-4 pr-2">
            <li>
              <a class="small-button"><font-awesome-icon icon="fa-regular fa-circle-user" /></a>
            </li>
            <li>
              <button class="flex items-center justify-center rounded-lg transition duration-75 text-gray-200 hover:bg-gray-700 w-auto h-10 p-3">RSUD Majalengka<font-awesome-icon class="ml-2" icon="fa-solid fa-angle-down" /></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>

import { ref } from 'vue';

const isNotification = ref(true);
const isFullscreen = ref(false);

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    isFullscreen.value = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      isFullscreen.value = false;
    }
  }
};

</script>

<style scoped>

</style>