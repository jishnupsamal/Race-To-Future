<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand head" href="#">Race To Future</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText"> &#160
            <ul class="navbar-nav me-2 mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
                </li>&#160 &#160
                <li class="nav-item">
                <a class="nav-link" href="#">About</a>
                </li>
            </ul>
            </div>
            </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4&display=swap');
.head {
  font-family: 'Source Serif 4', sans-serif;
}

a.nav-link
{
    padding-left: 10em;
    padding-right: 15em;
    position: relative;
}

a.nav-link:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #FFF;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

a.nav-link:hover:before {
  visibility: visible;
  transform: scaleX(1);
}
</style>