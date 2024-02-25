<template>
  <a target="_blank" :href="href"><slot /></a>
</template>

<script>
export default {
  props: {
    href: String,
  },
}
</script>
