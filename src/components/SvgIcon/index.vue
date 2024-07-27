<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :style="{
      width: size,
      height: size
    }"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: '10vw'
  }
})
</script>
