<template>
  <div class="angle_wrap">
    <div class="userName">
      <h1 id="firstName">{{ firstName }}</h1>
      <h1 id="lastName">{{ lastName }}</h1>
    </div>
    <!-- the socia media links -->
    <SociaMediaLink :links="sociaMediaLinks"></SociaMediaLink>
    <!-- the user profile image-->
    <MiddleBox></MiddleBox>
    <!-- the bottom link-->
    <BottomLink></BottomLink>
  </div>
</template>
<script>
import SociaMediaLink from "@/components/SociaMediaLink.vue";
import MiddleBox from "@/components/MiddleBox.vue";
import BottomLink from "@/components/BottomLink.vue";
export default {
  components: {
    MiddleBox,
    SociaMediaLink,
    BottomLink,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      sociaMediaLinks: null,
    };
  },
  beforeMount() {
    // get data using fetch
    try {
      fetch("https://hirng-x2021.glitch.me/api")
        .then((rawResponse) => rawResponse.json())
        .then((jsonResponse) => {
          this.firstName = jsonResponse.name.split(" ")[0];
          this.lastName = jsonResponse.name.split(" ")[1];
          this.sociaMediaLinks = { ...jsonResponse.social_media };
        });
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
<style scoped lang="scss">
@import "../styles/animate.css";
.angle_wrap {
  display: inline-block;
  width: 100%;
  text-align: center;

  h1 {
    animation-name: show;
    animation-duration: 2s;
    margin-top: 1em;
    margin-bottom: 1em;
    color: white;
    text-transform: capitalize;
    letter-spacing: 10px;
    font: {
      weight: 100;
      family: "Quicksand", sans-serif;
      size: 1.5em;
    }
  }
}
@media screen and (min-width: 40em) {
  .angle_wrap {
    h1 {
      width: 50%;
      font-size: 40px;
      margin: 1em auto;
    }
    .userName {
      display: flex;
    }
    #firstName {
      text-align: right;
      padding-right: 5px;
    }
    #lastName {
      text-align: left;
      padding-left: 5px;
    }
  }
}
</style>
