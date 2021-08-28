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
          </div>
          <div class="text-xs mb-1">{{ post.date }}</div>
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
      i18n: { locale }
    }
  }) {
    return $content(`/${locale}/blog`)
      .fetch()
      .then((posts) =>
        posts.map((p) => ({ ...p, path: p.path.replace(`/${locale}/`, '') }))
      )
      .then((posts) => ({ posts }))
  }
}
</script>
