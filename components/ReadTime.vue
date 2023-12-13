<template>
  <span>{{ minutes }} min read</span>
</template>

<script>
export default {
  props: {
    minutes: { type: Number, default: 0 },
  },
}
</script>