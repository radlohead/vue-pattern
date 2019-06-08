<template>
  <article>
    <h1>if and show</h1>
    <h2 v-if="isIf">if</h2>
    <h3 v-show="isShow">show</h3>
  </article>
</template>

<script>
export default {
  data() {
    return {
      isIf: false,
      isShow: false
    };
  }
};
</script>

<style>
</style>
