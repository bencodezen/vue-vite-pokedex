<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
})

const displayName = computed(() => {
  return props.name[0].toUpperCase() + props.name.substring(1)
})
</script>

<template>
  <li>{{ number }} - {{ displayName }}</li>
</template>

<style></style>
