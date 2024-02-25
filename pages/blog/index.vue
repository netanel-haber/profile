<template>
  <div class="mx-auto flex flex-col gap-2">
    <span class="p-2 border bg-neutral-100 text-neutral-600 mb-7">
      My name is Netanel Haber, I do ML/MLOps/FullStack/DevOps yada yada, I work here: <a-out class="text-blue-600"
        href="https://deci.ai/">Deci AI</a-out>
    </span>
    <hr />
    <section class="flex flex-wrap gap-4 p-2">
      <a-out href="https://netanel-haber.github.io/checkers/"
        style="background-image: linear-gradient(rgba(115, 104, 122, 0.709), rgb(93, 20, 133))"
        class="flex flex-1 flex-col w-30 rounded-md p-1 justify-between shadow-inner">
        <span class="text-white mb-2 text-center">Vanilla TS Checkers</span>
        <img style="box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);" src="/checkers.png" class="w-full h-auto p-2" />
      </a-out>
      <a-out href="https://netanel-haber.github.io/chatgpt-custom-instructions/"
        style="background-image: radial-gradient(circle, rgb(216, 200, 200) 0%, #00a67fae 100%)"
        class="flex flex-1 flex-col w-30 rounded-md p-1 justify-between shadow-inner">
        <span class="text-white mb-2 text-center">My ChatGPT Custom Instructions</span>
        <img style="box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);"
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" class="w-full h-auto p-2" />
      </a-out>
      <a-out href="https://netanel.dev/pwd"
        style="background-image: radial-gradient(circle at 20% 4%, #4A90E2 0%, #4A90E2 25%, #DB4437 50%, #DB4437 75%, #F4B400 100%), radial-gradient(circle at 4% 4%, #4A90E2 0%, #4A90E2 25%, #0F9D58 50%, #F4B400 75%, #F4B400 100%);"
        class="flex flex-1 flex-col w-30 rounded-md p-1 justify-between shadow-inner">
        <span class="text-white mb-2 text-center">Chrome Strong Password Generator</span>
        <img style="box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg"
          class="w-full h-auto p-2" />
      </a-out>
      <a-out href="https://www.netanel.dev/talor-wiki"
        style="background-image: radial-gradient(circle, #d6cab9 20%, #8da7b9 60%, #2d5f73 100%);"
        class="flex flex-1 flex-col w-30 rounded-md p-1 justify-between shadow-inner">
        <span class="text-white mb-2 text-center">Friend Reaches 500 Wiki Edits</span>
        <img style="box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);" src="/globe.png" class="w-full h-auto p-2" />
      </a-out>
    </section>
    <hr />
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
