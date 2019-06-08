<template>
  <div class="app">
    <h1>Computed and Watch</h1>
    <h2>{{ count }}</h2>
    <h3>{{ addCount }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  computed: {
    addCount() {
      return this.count + 3;
    }
  }
};
</script>

<style>
</style>
