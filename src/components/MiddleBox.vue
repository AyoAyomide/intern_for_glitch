<template>
  <div class="Middle_box">
    <img src="../assets/userImg/aquila.png" alt="user profile image" />
  </div>
</template>

<style scoped lang="scss">
.Middle_box {
  display: inline-block;
  height: 60vh;
  width: 40vmax;
  overflow: hidden;
  box-shadow: -4px 0px 30px rgba(0, 0, 0, 0.5);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img:hover {
    animation-name: zoom;
    animation-duration: 0.9s;
    transform: scale(1.2);
  }
}
@media screen and (min-width: 40em) {
  .Middle_box {
    min-height: 35em;
    min-width: 32em;
  }
}

</style>
