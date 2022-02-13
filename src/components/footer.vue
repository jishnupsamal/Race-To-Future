<template>
  <div class="footer">
    <aside>
      <h2 class="head">Race To Future</h2>
    </aside>

    <div class="social">
      <!--Facebook-->
      <a href="//facebook.com/rtf" target="_blank">
        <i class="fa-brands fa-facebook"></i>
      </a>

      <!--Twitter-->
      <a href="//twitter.com/rtf" target="_blank">
        <i class="fa-brands fa-twitter"></i>
      </a>

      <!--Youtube-->
      <a href="//youtube.com/rtf" target="_blank">
        <i class="fa-brands fa-youtube"></i>
      </a>

      <!--Instagram-->
      <a href="//instagram.com/rtf" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>

      <!--LinkedIN-->
      <a href="//linkedin.com/company/rtf" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </div>
    <div class="ctext">
      Made with
      <i class="fa-solid fa-heart heart"></i> by
      <a class="copy" ref="rtf" href="//github.com/jishnu-prasad-s">
        Jishnu Prasad Samal
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");

.footer {
  background-color: #121211;
  bottom: 0;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
}

.head {
  color: #fffefc;
  font-size: 2rem;
  text-decoration-color: none;
  font-family: "Josefin Sans", sans-serif;
}

aside {
  padding: 2rem 0 2rem 0;
  text-decoration: none;
}

.social {
  margin: 0 0 2rem 0;
}

.social .fa-brands {
  padding: 0 1rem 0rem 1rem;
  font-size: 2rem;
  color: rgba(235, 153, 11, 1);
}

.social .fa-brands:hover,
.copy:hover {
  color: rgb(255, 124, 0);
}

.copy {
  color: rgba(235, 153, 11, 1);
}

.ctext {
  text-align: center;
  color: #575859;
}

.heart:hover {
  transition-property: color;
  transition-duration: 600ms;
  transition-delay: 100ms;
  transition-timing-function: ease-in-out;
  color: #f72a2a;
  text-shadow: 2rem 2rem 2rem #121211;
}
</style>
