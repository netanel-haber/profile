<template>
  <div class="flex justify-between border rounded gap-1 p-1">
    <nuxt-link
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :class="{ disabled: isDisabled(locale.code) }"
      class="px-2 py-1 border rounded text-xl"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  methods: {
    isDisabled(locale) {
      return this.$i18n.locale === locale
    }
  }
}
</script>

<style lang="postcss" scoped>
.disabled {
  @apply bg-blue-100 cursor-default;
}
</style>
