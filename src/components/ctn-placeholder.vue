<script setup>
defineProps({
  header: String,
  img: String,
  content: String,
});
</script>

<template>
  <div class="main">
    <h1>{{ header }}</h1>
    <div class="center">
      <img :src="img" :class="align" />
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&family=Fredericka+the+Great&display=swap");
h1 {
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
}

.center {
  text-align: center;
}

.left {
  text-align: left;
}

img {
  height: 25rem;
  width: 25rem;
}

p {
  font-family: "Finger Paint", cursive;
  font-size: 1.5rem;
}

.main {
  padding-top: 2rem;
  padding-bottom: 2.5rem;
}
</style>
