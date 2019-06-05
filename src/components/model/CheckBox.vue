<template>
  <article>
    <input type="checkbox" :value="value" @click="toggle">
    <label>checkbox</label>
  </article>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    toggle() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style>
</style>
