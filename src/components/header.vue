<script setup>
import { ref } from "vue";

defineProps({
  head: String,
});
AOS.init();
</script>

<template>
  <div class="bgimg uk-background-cover" uk-parallax="bgy: 0,400">
    <div class="cover uk-text-center">
      <h1 class="uk-heading-large head" data-aos="fade-up">{{ head }}</h1>
      <p class="text" data-aos="fade-down">
        Are you ready to experience the future?
      </p>
      <span class="material-icons arrow uk-text-center">
        keyboard_double_arrow_down
      </span>
    </div>
    
  </div>
  <div>
    
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Supermercado+One&display=swap&effect=3d-float");
.head {
  font-family: "Supermercado One", cursive;
}

.cover {
  padding: 9rem 5rem 6rem 5rem;
}

.bgimg {
  background-image: url("https://images.unsplash.com/photo-1495366554757-8568e69d7f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  background-repeat: no-repeat;
  background-size: cover;
}

.text {
  font-size: 2em;
  font-family: "Lora", serif;
}

@keyframes arrow {
  0% {
    color:#110a87;
    top: 3rem;
  }

  50% {
    color: #1e1ee3;
    top: 1.5rem;
  }

  100% {
    color: #00d4ff;
    top: 0rem;
  }
}

.arrow {
  font-size: 5rem;
  margin-top: 2rem;
  padding-top: 3rem;
  animation: arrow 2s ease-in infinite alternate-reverse;
  position: relative;
}
</style>
