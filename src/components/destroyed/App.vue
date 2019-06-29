<template>
  <div>
    <button @click="selectedComponent = 'Test'">Test</button>
    <button @click="selectedComponent = 'New'">New</button>
    <component :is="selectedComponent">
      <p>Default content</p>
    </component>
  </div>
</template>

<script>
import Test from "./Test.vue";
import New from "./New.vue";

export default {
  data() {
    return {
      selectedComponent: "Test"
    };
  },
  components: {
    Test,
    New
  }
};
</script>

<style>
</style>
