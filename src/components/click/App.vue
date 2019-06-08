<template>
  <article>
    <h1>v-on click</h1>
    <div v-on:click="alertMessage('test1')">click test1</div>
    <div v-on:click="alertMessage('test2')">click test2</div>
    <a v-on:click.stop="stop">click stop</a>
    <form v-on:submit.prevent="onSubmit">submit prevent</form>
    <input type="text" v-on:keyup.enter="stop">
    <input type="text" @keyup.enter="stop">
  </article>
</template>

<script>
export default {
  data() {
    return {
      title: "title!!"
    };
  },
  methods: {
    alertMessage(msg) {
      alert(msg);
    },
    stop() {
      console.log("stop");
    }
  }
};
</script>

<style>
</style>
