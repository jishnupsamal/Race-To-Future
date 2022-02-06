<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
<div class="bgimg uk-background-cover" uk-parallax="bgx: -50">
  <h1 class="uk-heading-2xlarge uk-text-center head">{{msg}}</h1>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Supermercado+One&display=swap&effect=3d-float');
.head {
  font-family: 'Supermercado One', cursive;
}

.bgimg {
  background-image: url('https://images.unsplash.com/photo-1495366554757-8568e69d7f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
}
</style>
