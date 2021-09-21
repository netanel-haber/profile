<template>
  <header class="topnav h-54px p-2 border-b-2 border-gray-200 bg-white">
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
      <nuxt-link class="text-2xl" :to="localePath('/')">🏠</nuxt-link>
      <div class="flex gap-3 items-center">
        <a
          target="_blank"
          href="https://stackoverflow.com/users/12473000/notepadninja"
          ><img src="/stackoverflow.png" width="27" alt=""
        /></a>
        <a target="_blank" href="https://github.com/netanel-haber/profile"
          ><img src="/github.png" width="25" alt=""
        /></a>
        <a target="_blank" href="https://www.linkedin.com/in/netanel-haber/"
          ><img src="/linkedin.png" width="24" alt=""
        /></a>
      </div>

      <LanguageSwitch />
    </div>
  </header>
</template>

<i18n lang="yaml">
he:
  blog: הבלוג שלי
en:
  blog: My Blog
</i18n>
