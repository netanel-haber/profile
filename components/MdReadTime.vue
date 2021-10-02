<template>
  <read-time :minutes="minutes" />
</template>

<script>
export default {
  props: { minutes: { type: Number, default: 0 } },
}
</script>

<style lang="postcss" scoped>
span {
  @apply text-gray-500 text-base;
}
</style>

