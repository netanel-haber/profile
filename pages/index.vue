<template>
  <main class="mx-auto flex flex-col">
    <section class="mb-3 flex flex-col gap-3">
      <article>
        <div class="p-1">
          <div class="mb-2">
            <nuxt-link class="text-blue-600 text-lg" to="/concurrency">
              Concurrency
            </nuxt-link>
          </div>
          <div class="text-sm text-gray-600">Yes, Python has threads (*Sigh*)</div>
        </div>
        <hr />
      </article>
      <article>
        <div class="p-1">
          <div class="mb-2">
            <nuxt-link class="text-blue-600 text-lg" to="/typescript-typesystems-and-javascript">
              TypeScript, TypeSystems and JavaScript
            </nuxt-link>
          </div>
          <div class="text-sm text-gray-600">Notepad -> Notepad++</div>
        </div>
        <hr />
      </article>
    </section>
    <apps />
  </main>
</template>