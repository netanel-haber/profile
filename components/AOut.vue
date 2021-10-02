<template>
  <a target="_blank" class="text-blue-500" href="href"><slot /></a>
</template>

<script>
export default {
  props: {
    href: String,
  },
}
</script>
