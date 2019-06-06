<template>
  <div id="modal">
    <h3>Let's trigger this here modal!</h3>
    <button @click="toggleShow">
      <span v-if="isShowing">Hide child</span>
      <span v-else>Show child</span>
    </button>
    <app-child v-if="isShowing" class="modal">
      <button @click="toggleShow">Close</button>
    </app-child>
  </div>
</template>

<script>
const AppChild = {
  template: `<div>
    <h2>Here I am!</h2>
    <slot />
  </div>`
};

const toggle = {
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
};

export default {
  mixins: [toggle],
  components: {
    AppChild
  }
};
</script>

