<template>
  <footer class="border border-gray-200">
    <div class="max-w-2xl mx-auto py-2">
      {{ $t('written') }}
      <a-out href="https://nuxtjs.org/">NuxtJS ❤️</a-out>.
      {{ $t('hosted') }}
      <a-out href="https://pages.github.com/">Github Pages</a-out>. ({{
        $t('because')
      }})
    </div>
  </footer>
</template>

<i18n lang="yaml">
he:
  written: נכתב ב
  hosted: הוסטינג ב
  because: רציתי לראות על מה כל המגניבים מדברים
en:
  written: Written in
  hosted: hosted on
  because: I wanted to see what all the cool kids are talking about
</i18n>
