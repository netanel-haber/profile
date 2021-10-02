<template>
  <read-time :minutes="minutes" />
</template>

<script>
export default {
  props: { minutes: { type: Number, default: 0 } },
}
</script>

<style scoped>
span {
  @apply text-gray-400 text-sm;
}
</style>

