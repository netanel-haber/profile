<template>
  <div class="mx-auto flex flex-col">
    <section class="mb-3 flex flex-col gap-3">
      <article v-for="(post, $index) in posts" :key="`post-${$index}`">
        <div class="p-1">
          <div class="mb-2">
            <nuxt-link class="text-blue-600 text-lg" :to="post._path">
              {{ post.title }}
            </nuxt-link>
          </div>
          <div class="text-sm text-gray-600">{{ post.description }}</div>
        </div>
        <hr />
      </article>
    </section>
    <apps />
  </div>
</template>

<script setup>
const posts = await queryContent("/blog").find()
</script>
