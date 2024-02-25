<template>
  <header class="topnav h-54px p-2 bg-white">
    <div
      class="
        container
        mx-auto
        flex
        justify-between
        items-center
        max-w-2xl
        m-auto
        h-9
      "
    >
      <nuxt-link class="text-2xl" :to="'/'">🏠</nuxt-link>
      <div class="flex gap-3 items-center">
        <a-out href="https://stackoverflow.com/users/12473000/notepadninja">
          <img src="/stackoverflow.webp" width="27" alt="" />
        </a-out>
        <a-out href="https://github.com/netanel-haber/profile">
          <img src="/github.webp" width="25" alt="" />
        </a-out>
        <a-out href="https://www.linkedin.com/in/netanel-haber/">
          <img src="/linkedin.webp" width="24" alt="" />
        </a-out>
      </div>
    </div>
    <hr/>
  </header>
</template>
