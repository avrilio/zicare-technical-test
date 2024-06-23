<template>
    <span :class="badgeClass">
        {{ status }}
    </span>
</template>

<script setup>

const props = defineProps({
  status: {
    type: String,
    required: true
  }
});

const badgeClass = {
  'text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-2xl border-2 border-zihub-border bg-transparent': true,
  'text-green-300': props.status === 'SUCCESS',
  'text-red-300': props.status === 'FAILED',
  'text-white': props.status === 'DRAFT'
};

</script>

<style scoped>

</style>