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
</script>

<template>
  <li>{{ number }} - {{ name }}</li>
</template>

<style></style>
