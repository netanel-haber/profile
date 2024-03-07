<template>
  <main class="mx-auto flex flex-col">
    <section class="mb-3 flex flex-col gap-3">
      <article v-for="article in articles">
        <div class="p-1">
          <div class="mb-2">
            <nuxt-link class="text-blue-600 text-lg" :to="article.to">
              {{ article.title }}
            </nuxt-link>
          </div>
          <div class="text-sm text-gray-600">{{ article.description }}</div>
        </div>
        <hr />
      </article>
    </section>
    <apps />
  </main>
</template>

<script setup lang="ts">
const articles = [
  { title: "Ok, Sometimes Async-Await", description: "I'll concede in 3 cases", to: "/ok-sometimes-async-await" },
  { title: "Concurrency", description: "Yes, Python has threads (*Sigh*)", to: "/concurrency" },
  { title: "TypeScript, TypeSystems and JavaScript", description: "Notepad -> Notepad++", to: "/typescript-typesystems-and-javascript" }
]
</script>