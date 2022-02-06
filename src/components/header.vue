<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
  <h1 class="font-effect-3d-float">{{msg}}</h1>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Supermercado+One&display=swap&effect=3d-float');
h1 {
  font-family: 'Supermercado One', cursive;
}
</style>
