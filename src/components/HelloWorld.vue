<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  msg: string;
  optionalProp?: number;
}>();
</script>
