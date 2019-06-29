<template>
  <article>
    <button-tab>
      <h1>First Header</h1>
    </button-tab>
    <button-tab>
      <h1>Second Header</h1>
    </button-tab>
    <button-tab>
      <h1>Third Header</h1>
    </button-tab>
  </article>
</template>

<script>
import ButtonTab from "./ButtonTab";

export default {
  components: {
    ButtonTab
  },
  mounted() {
    this.$destroy();
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style>
</style>
