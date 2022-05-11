<template>
  <footer class="border border-gray-200">
    <div class="max-w-2xl mx-auto p-2 text-center">
      {{ $t('written') }}
      <a-out href="https://nuxtjs.org/">NuxtJS ❤️</a-out>
      <span class="mx-2">•</span>
      {{ $t('hosted') }}
      <a-out href="https://pages.github.com/">Github Pages</a-out>
      <span class="mx-2">•</span>
      {{ $t('analytics_by') }}
      <a
        title="Privacy-friendly Web Analytics"
        href="https://clicky.com/101366055"
        ><img
          class="inline"
          alt="Clicky"
          src="https://static.getclicky.com/media/links/badge.gif"
          border="0"
        />
      </a>
    </div>
  </footer>
</template>

<i18n lang="yaml">
he:
  written: נכתב ב
  hosted: הוסטינג ב
  analytics_by: אנליטיקות באמצעות
en:
  written: Written in
  hosted: hosted on
  analytics_by: Analytics by
</i18n>
