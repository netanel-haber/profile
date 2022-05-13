<template>
  <span class="p-2 border bg-neutral-100 text-neutral-600 mb-7">
    {{ $t('me') }}
    <br />
    {{ $t('email') }}:

    <a class="text-blue-500" href="mailto:netanel.t.haber@gmail.com"
      >netanel.devblog@gmail.com </a
    >.
  </span>
</template>
<i18n lang="yaml">
he:
  me: 'קוראים לי נתנאל הבר, אני מתכנת ובעיקר מתעסק בריאקט. זאת החתיכה שלי מהאינטרנט!'
  email: 'צרו איתי קשר פה'
en:
  me: 'My name is Netanel Haber. I program, and currently mostly deal with React. This is my slice of the internet!'
  email: 'Reach me here'
</i18n>
