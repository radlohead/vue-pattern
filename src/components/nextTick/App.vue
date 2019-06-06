<template>
  <div>
    <h1 ref="title">{{ message }}</h1>
    <button type="button" @click="updateMessage">click</button>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "nextTick",
  data() {
    return {
      message: ""
    };
  },
  created() {
    this.message = "new tick";
    // console.log("before: ", this.$refs["title"]); // undefined
    this.$nextTick(() => {
      // console.log("nextTick: ", this.$refs["title"]); // DOM rendering ok
    });
  },
  methods: {
    updateMessage() {
      this.message = "new tick";
      console.log("before: ", this.$refs["title"]); // DOM rendering ok
      this.$nextTick(() => {
        console.log("nextTick: ", this.$refs["title"]); // DOM rendering ok
      });
    }
  }
};
</script>

<style>
</style>
