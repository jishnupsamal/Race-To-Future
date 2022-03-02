<script setup>
    defineProps({
    header: String,
    img: String,
    });
</script>

<template>
    <div>
        <h1>{{ header }}</h1>
        <p class="center">
            <img :src="img" :class="align">
        </p>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
h1 {
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
}

.center {
    text-align: center;
}

.left {
    text-align: left;
}

img {
    height: 25rem;
    width: 25rem
}
</style>