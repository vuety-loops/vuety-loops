<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--one"></div>
    <div class="Triangle Triangle--three"></div>
    <div class="Triangle Triangle--five"></div>
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 200px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 170px solid #FEFC19;
}

.Triangle--three {
  top: 70px;
  left: 40px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 100px solid #FFB031;
}

.Triangle--five {
  top: 190px;
  left: 60px;
  animation: goup 0.5s linear forwards 3.4s;
  background-image: url('~/assets/flstudio.png');
  height: 80px;
  width: 80px;
  background-size: contain;
  background-position: center;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes goup {
  100% {
    top: 70px;
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
