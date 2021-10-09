<template>
  <span class="term">
    <slot />
  </span>
</template>
<style scoped lang="postcss">
.term {
  background-color: rgba(196, 255, 100, 0.3);
  font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
  @apply cursor-default px-1 rounded;
}
</style>
