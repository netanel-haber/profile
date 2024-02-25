<template>
  <div class="mx-auto flex flex-col gap-2">
    <span class="p-2 border bg-neutral-100 text-neutral-600 mb-7">
      My name is Netanel Haber, I do ML/MLOps/FullStack/DevOps yada yada, I work here: <a-out
        href=" https://deci.ai/">Deci AI</a-out>
    </span>
    <section class="flex flex-col gap-10">
      <article v-for="(post, $index) in posts" :key="`post-${$index}`">
        <div class="p-1">
          <div class="mb-2">
            <nuxt-link class="text-blue-600 text-lg" :to="post.path">
              {{ post.title }}
            </nuxt-link>
            <span v-if="post.password">🔒</span>
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
  data: () => ({
    posts: [
      {
        "slug": "Concurrency",
        "description": "Yes, Python has threads (*Sigh*)",
        "title": "Concurrency",
        "date": "September 20, 2021",
        "order": 2,
        "dir": "/blog",
        "path": "/blog/Concurrency",
        "extension": ".md",
        "createdAt": "2024-02-25T18:59:40.332Z",
        "updatedAt": "2024-02-25T18:59:40.332Z"
      },
      {
        "slug": "TypeScript, TypeSystems and JavaScript",
        "description": "Notepad -> Notepad++",
        "title": "TypeScript, TypeSystems and JavaScript",
        "date": "February 27, 2021",
        "order": 1,
        "dir": "/blog",
        "path": "/blog/TypeScript, TypeSystems and JavaScript",
        "extension": ".md",
        "createdAt": "2024-02-25T18:59:40.333Z",
        "updatedAt": "2024-02-25T18:59:40.333Z"
      }
    ]
  })

}
</script>
