<template>
  <div class="container mx-auto pt-6">
    <article v-if="post">
      <nuxt-content class="text-gray-800 prose" :document="post" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'Post',
  async asyncData({ $content, params, app }) {
    const { slug } = params
    const post = await $content(`${app.i18n.locale}/blog`, slug).fetch()
    return {
      post
    }
  }
}
</script>

<style>
.prose {
  max-width: unset;
}
</style>
