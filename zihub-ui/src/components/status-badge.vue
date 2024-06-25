<template>
    <span class="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl border-2 border-zihub-border bg-transparent" :class="statusStyle">
        {{ status }}
    </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  status: {
    type: String,
    required: true
  }
});

const statusStyle = computed(() => {
  return {
    'text-green-300': props.status === 'SUCCESS',
    'text-red-300': props.status === 'FAILED',
    'text-white': props.status === 'DRAFT'
  };
});

</script>

<style scoped>

</style>