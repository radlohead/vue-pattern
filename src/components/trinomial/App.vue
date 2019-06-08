<template>
  <article class="app">
    <h1 v-bind:class="{title: isTitle}">클래스 조건부 바인딩 테스트</h1>
    <h2 v-bind:class="[isTitle ? 'title' : 'no-Title']">삼항식 클래스 테스트</h2>
    <h3 v-if="isTitle">조건부 html 랜더링1</h3>
    <h3 v-else>조건부 html 랜더링2</h3>
  </article>
</template>

<script>
export default {
  data() {
    return {
      isTitle: false
    };
  }
};
</script>

<style>
</style>
