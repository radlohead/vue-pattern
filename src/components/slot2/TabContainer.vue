<template>
  <article>
    <button-tab>
      <h1 slot="header">First Header</h1>
      <div slot="content" class="content">Tab Content #1</div>
    </button-tab>
    <button-tab>
      <h1 slot="header">Second Header</h1>
      <div slot="content" class="content">Tab Content #2</div>
    </button-tab>
    <button-tab>
      <h1 slot="header">Third Header</h1>
      <div slot="content" class="content">Tab Content #3</div>
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
