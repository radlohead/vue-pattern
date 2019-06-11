<template>
  <div>
    <check-box v-model="checked"></check-box>
    <input type="text" v-model="modelText">
    modelText: {{ modelText }}
  </div>
</template>

<script>
import CheckBox from "./CheckBox";

export default {
  components: {
    CheckBox
  },
  data() {
    return {
      checked: false,
      modelText: ""
    };
  }
};
</script>

<style>
</style>
