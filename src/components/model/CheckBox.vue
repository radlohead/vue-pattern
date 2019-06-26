<template>
  <article>
    <input type="checkbox" :value="value" @click="toggle">
    <span>props value: {{ value }}</span>
    <label>checkbox</label>
  </article>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean | String,
      default: "props value값이 없으면 이 텍스트가 보여집니다."
    }
  },
  methods: {
    toggle() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style>
</style>
