<template>
  <span class="term cursor-default px-1 rounded">
    <slot />
  </span>
</template>
<style scoped>
.term {
  background-color: rgba(196, 255, 100, 0.3);
  font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
}
</style>
