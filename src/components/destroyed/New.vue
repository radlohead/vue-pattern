<template>
  <div>
    <h1>New</h1>
    <span>{{ counter }}</span>
    <button v-on:click="counter++">increment counter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  beforeDestroy() {
    console.log("New beforeDestroyed");
  },
  destroyed() {
    console.log("New destroyed");
  }
};
</script>

<style>
</style>
