<template>
    <div>
        <h1 class="head uk-heading-medium">Our Partners</h1>
    </div>

    <div
        class="uk-position-relative uk-visible-toggle uk-light"
        id="partners"
        tabindex="-1"
        uk-slider="autoplay:true; autoplay-interval: 3000; pause-on-hover: true"
    >
    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
      <li>
        <div class="uk-panel">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1920px-Microsoft_logo_%282012%29.svg.png"
            alt="Microsof"
          />
        </div>
      </li>
      <li>
        <div class="uk-panel">
          <img
            src="//www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google"
          />
        </div>
      </li>
      <li>
        <div class="uk-panel" uk-img>
          <img
            src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
            alt="Amazon"
          />
        </div>
      </li>
      <li>
        <div class="uk-panel">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
            alt="Meta"
          />
        </div>
      </li>
      <li>
        <div class="uk-panel">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
            alt="Twitter"
          />
        </div>
      </li>
      <li>
        <div class="uk-panel">
          <img
            src="//logos-world.net/imageup/MIT/MIT_Logo_PNG(1).png"
            alt="MIT"
          />
        </div>
      </li>
      <li>
        <div class="uk-panel">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM"
          />
        </div>
      </li>
      <li>
        <div class="uk-panel">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/6/6a/Intel_logo_%282020%2C_dark_blue%29.svg"
            alt="Intel"
          />
        </div>
      </li>
      <li>
        <div class="uk-panel">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg"
            alt="Adobe"
          />
        </div>
      </li>
      <li>
        <div class="uk-panel">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg"
            alt="Sony"
          />
        </div>
      </li>
      <li>
        <div class="uk-panel">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
            alt="Samsung"
          />
        </div>
      </li>
    </ul>

    <a
      class="uk-position-center-left uk-position-small uk-hidden-hover"
      href="#"
      uk-slidenav-previous
      uk-slider-item="previous"
    ></a>
    <a
      class="uk-position-center-right uk-position-small uk-hidden-hover"
      href="#"
      uk-slidenav-next
      uk-slider-item="next"
    ></a>
  </div>
</template>
<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

img {
  height: 2em;
}
.uk-panel {
  padding: 2em 2em;
}

.head {
    text-align: center;
    font-family: 'PT Sans', sans-serif;
}
</style>
