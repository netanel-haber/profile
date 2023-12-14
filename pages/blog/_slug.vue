<template>
  <div class="container mx-auto pt-6">
    <nice-input
      v-if="locked"
      :value="value"
      focus-on-mount
      placeholder="password"
      @input="value = $event"
    />
    <article :class="{ invisible: locked }">
      <nuxt-content class="text-gray-800 prose" :document="post" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'Post',
  async asyncData({ $content, params }) {
    const { slug } = params
    const post = await $content(`/blog`, slug).fetch()
    return {
      post,
    }
  },
  data() {
    return {
      value: '',
    }
  },
  computed: {
    locked() {
      if (process.env.NODE_ENV === 'development') return false
      if (!this.post?.password) return false
      return this.post.password !== this.value
    },
  },
}
</script>

<style lang="scss">
.prose {
  max-width: unset;
  h1 {
    margin-bottom: 0px;
  }
  h2,
  h3 {
    &:before {
      display: block;
      content: ' ';
      margin-top: -40px;
      height: 40px;
      visibility: hidden;
      pointer-events: none;
    }
    a:before {
      content: '#';
      color: rgb(0, 205, 129);
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.75rem;
      line-height: 2rem;
      margin-left: -1.25rem;
      padding-right: 0.5rem;
      position: absolute;
    }
  }
  h4 {
    text-decoration: underline;
  }
  table {
    border: 1px solid rgb(223, 217, 217);
    td,
    th {
      text-align: center;
    }
  }
}
</style>
