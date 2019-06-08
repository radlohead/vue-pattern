<template>
  <div class="app">
    <p>
      <input type="text" v-model="question">
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: "질문을 하기 전까지는 대답할 수 없습니다."
    };
  },
  watch: {
    question(newQuestion) {
      if (!this.getAnswer()) return;
      this.answer = newQuestion;
    }
  },
  methods: {
    getAnswer() {
      if (this.question.length === 1 && this.question === " ") {
        alert("첫글자에 공백을 입력할 수 없습니다.");
        this.question = "";
        return false;
      }
      if (this.question.length > 10) {
        alert("질문이 너무 깁니다.");
        return false;
      }
      if (this.question.length > 1 && this.question.length < 10) return true;
    }
  }
};
</script>

<style>
</style>
