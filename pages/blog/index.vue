<template>
  <div class="mx-auto flex flex-col gap-2">
    <Me />
    <section class="flex flex-col gap-10">
      <article v-for="(post, $index) in posts" :key="`post-${$index}`">
        <div class="p-1">
          <div class="mb-2">
            <nuxt-link class="text-blue-600 text-lg" :to="post.path">
              {{ post.title }}
            </nuxt-link>
            <span v-if="post.password">🔒</span>
          </div>

          <div class="text-xs mb-1">
            {{ post.date }} · <read-time :minutes="post.minutes" />
          </div>
          <div class="text-sm text-gray-600">{{ post.description }}</div>
        </div>
        <hr />
      </article>
    </section>
  </div>
</template>

<script>
export default {
  asyncData({
    $content,
    app: {
      i18n: { locale },
    },
  }) {
    return $content(`/${locale}/blog`)
      .without(['body'])
      .sortBy('order', 'desc')
      .fetch()
      .then((posts) => {
        return {
          posts: posts.map((p) => {
            const path = p.path.replace(/.*\/blog\//, '/blog/')
            return { ...p, path }
          }),
        }
      })
  },
}
</script>
