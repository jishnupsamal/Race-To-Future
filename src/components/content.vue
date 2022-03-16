<script setup>
import CtnPlc from "./ctn-placeholder.vue";
import Imagine from "./imagine.vue";
AOS.init();
</script>

<template>
  <div id="experience">
    <CtnPlc
      header="Robotics"
      img="/images/robotics.svg"
      content="Humanoids to do all your boring tasks..."
      alt="Robotics"
      data-aos="fade-left"
    />

    <CtnPlc
      header="Artificial Intelligence"
      img="/images/ai.svg"
      content="Intelligent machines to help you in your homework..."
      alt="Artificial Intelligence"
      data-aos="fade-right"
    />

    <CtnPlc
      header="Science"
      img="/images/science.svg"
      content="Advanced Science for the Humanity..."
      alt="Science"
      data-aos="fade-left"
    />

    <CtnPlc
      header="Virtual Reality"
      img="/images/vr.svg"
      content="Experience the world at your home..."
      alt="Virtual Reality"
      data-aos="fade-right"
    />
    <Imagine />
    <div class="pt1">
      <p>Explore</p>
      <p>Imagine</p>
      <p>Invent</p>
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
