<template>
  <div>
    <h1>mixin merge</h1>
  </div>
</template>

<script>
const mixin = {
  data: () => {
    return {
      message: "hello",
      foo: "abc"
    };
  }
};

export default {
  mixins: [mixin],
  data() {
    return {
      message: "goodbye",
      bar: "def"
    };
  },
  created() {
    console.log(Object.assign({}, this.$data));
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
};
</script>

<style>
</style>
