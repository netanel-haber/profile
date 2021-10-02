// https://gist.github.com/andreaselia/aa2d44e3dde3b726d3affc4dec7d8b47
<template>
  <div>{{ readingTime }} {{ $t('readingTime') }}</div>
</template>

<script>
export default {
  props: ['content'],
  computed: {
    readingTime() {
      const contentAsString = JSON.stringify(this.content)
      const words = contentAsString.split(' ').length
      const wordsPerMinute = 265 // https://medium.com/blogging-guide/how-is-medium-article-read-time-calculated-924420338a85
      return Math.ceil(words / wordsPerMinute)
    },
  },
}
</script>

<i18n lang="yaml">
he: 
    readingTime: דקות קריאה
en:
    readingTime: min read
</18n>