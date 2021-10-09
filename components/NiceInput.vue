<template>
  <div class="mx-auto text-center">
    <label v-if="$slots.default" :for="name"><slot /></label>
    <input
      ref="input"
      :type="type"
      :value="value"
      :name="name"
      class="
        shadow
        appearance-none
        border
        rounded
        w-md
        py-2
        px-3
        text-gray-700
        leading-tight
        focus:outline-none
        focus:shadow-outline
      "
      v-bind="$attrs"
      v-on="listeners"
      @input="input"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: String,
    name: String,
    type: { type: String, default: 'text' },
    focusOnMount: Boolean,
  },
  computed: {
    listeners() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { input, ...listeners } = this.$listeners
      return listeners
    },
  },
  mounted() {
    this.focusInput()
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value)
    },
    focusInput() {
      this.$refs.input.focus()
    },
  },
}
</script>
