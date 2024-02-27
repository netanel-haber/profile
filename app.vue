<template>
  <div class="w-full min-h-screen flex flex-col">
    <header class="topnav h-54px p-2 bg-white">
      <div class="
        container
        mx-auto
        flex
        justify-between
        items-center
        max-w-2xl
        m-auto
        h-9
      ">
        <nuxt-link class="text-l" :to="'/'">Netanel Haber's 🏠 Thingy</nuxt-link>
        <div class="flex gap-3 items-center">
          <a target="_blank" href="https://stackoverflow.com/users/12473000/notepadninja">
            <img src="/stackoverflow.webp" width="27" alt="" />
          </a>
          <a target="_blank" href="https://github.com/netanel-haber/profile">
            <img src="/github.webp" width="25" alt="" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/netanel-haber/">
            <img src="/linkedin.webp" width="24" alt="" />
          </a>
        </div>
      </div>
      <hr />
    </header>
    <div class="p-2 bg-white w-full max-w-2xl mx-auto flex-1">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  scroll-behavior: smooth;
}

.term {
  background-color: rgba(196, 255, 100, 0.3);
  font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
}
</style>
