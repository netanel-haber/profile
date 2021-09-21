<template>
  <span class="term">
    <slot />
  </span>
</template>
<style scoped lang="postcss">
.term {
  @apply bg-blue-50 cursor-default p-0.5 mx-0.5 border rounded text-sm font-sans;
}
</style>
