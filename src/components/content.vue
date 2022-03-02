<script setup>
import CtnPlc from "./ctn-placeholder.vue";
</script>

<template>
  <div id="experience">
    <CtnPlc
      header="Robotics"
      img="\src\assets\robotics.svg"
      content="Humanoids to do all your boring tasks..."
    />

    <CtnPlc
      header="Artificial Intelligence"
      img="\src\assets\ai.svg"
      content="Intelligent machines to help you in your homework..."
    />

    <CtnPlc
      header="Science"
      img="\src\assets\science.svg"
      content="Advanced Science for the Humanity..."
    />

    <CtnPlc
      header="Virtual Reality"
      img="\src\assets\vr.svg"
      content="Experience the world at your home..."
    />
    <div class="pt1">
      <p>Explore</p>
      <p>Imagine</p>
      <p>Create</p>
      <p class="em">the Future</p>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");

div {
  margin-top: 2px;
  padding-top: 1rem;
}

p {
  font-family: "Fredericka the Great", cursive;
  font-size: 5rem;
  text-align: center;
}

.pt1 {
  padding-bottom: 2rem;
}

.em {
  font-family: "Bungee Shade", cursive;
}
</style>
