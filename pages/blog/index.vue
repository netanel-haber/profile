<template>
  <div class="mx-auto flex flex-col gap-2">
    <span class="p-2 border bg-neutral-100 text-neutral-600 mb-7">
      My name is Netanel Haber, I do ML/MLOps/FullStack/DevOps yada yada, I work here: <a-out
        href=" https://deci.ai/">Deci AI</a-out>
    </span>
    <div class="flex flex-wrap gap-4">
      <a-out href="https://netanel-haber.github.io/checkers/"
        class="flex-1 text-white p-4 text-center bg-black bg-no-repeat bg-center bg-contain w-16">Vanilla TS
        Checkers
        <img src="/checkers.png" />
      </a-out>
      <a-out href="https://netanel-haber.github.io/chatgpt-custom-instructions/"
        class="flex-1 text-white p-4 text-center bg-black bg-no-repeat bg-center bg-contain w-16">My ChatGPT Custom
        Instructions
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" /></a-out>
      <a-out href="https://netanel.dev/pwd"
        class="flex-1 text-white p-4 text-center bg-black bg-no-repeat bg-center bg-contain w-16">Chrome Suggest
        Password
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" />
      </a-out>
    </div>
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
        slug: "Concurrency",
        description: "Yes, Python has threads (*Sigh*)",
        title: "Concurrency",
        date: "September 20, 2021",
        order: 2,
        dir: "/blog",
        path: "/blog/Concurrency",
        extension: ".md",
        createdAt: "2024-02-25T18:59:40.332Z",
        updatedAt: "2024-02-25T18:59:40.332Z"
      },
      {
        slug: "TypeScript, TypeSystems and JavaScript",
        description: "Notepad -> Notepad++",
        title: "TypeScript, TypeSystems and JavaScript",
        date: "February 27, 2021",
        order: 1,
        dir: "/blog",
        path: "/blog/TypeScript, TypeSystems and JavaScript",
        extension: ".md",
        createdAt: "2024-02-25T18:59:40.333Z",
        updatedAt: "2024-02-25T18:59:40.333Z"
      }
    ]
  })

}
</script>
