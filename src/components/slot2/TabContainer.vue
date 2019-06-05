<template>
  <article>
    <button-tab>
      <template slot="header">
        <h1>First Header</h1>
      </template>
      <template slot="content">
        <div class="content">Tab Content #1</div>
      </template>
    </button-tab>
    <button-tab>
      <template slot="header">
        <h1>Second Header</h1>
      </template>
      <template slot="content">
        <div class="content">Tab Content #2</div>
      </template>
    </button-tab>
    <button-tab>
      <template slot="header">
        <h1>Third Header</h1>
      </template>
      <template slot="content">
        <div class="content">Tab Content #3</div>
      </template>
    </button-tab>
  </article>
</template>

<script>
import ButtonTab from "./ButtonTab";
export default {
  components: {
    ButtonTab
  }
};
</script>

<style>
</style>
