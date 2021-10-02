<template>
  <span>{{ minutes }} {{ $t('readingTime') }}</span>
</template>

<script>
export default {
  props: {
    minutes: { type: Number, default: 0 },
  },
}
</script>

<i18n lang="yaml">
he: 
    readingTime: דקות קריאה
en:
    readingTime: min read
</18n>