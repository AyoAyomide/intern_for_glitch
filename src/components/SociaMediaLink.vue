<template>
  <div class="SociaMediaLink">
    <!-- load all links -->
    <ul v-if="links != null">
      <li v-for="(name, url) in linksData" :key="url">
        <a :href="setUrl(url, name)" :class="url" :title="url"></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["links"],
  watch: {
    // check if async have load links
    links: function (newData) {
      if (newData != null) {
        this.linksData = newData;
      }
    },
  },
  data() {
    return {
      linksData: [],
    };
  },
  methods: {
    // set url for each link
    setUrl: function (url, name) {
      let urlObj = {
        twitter: "https://twitter.com/",
        snapchat: "https://snapchat.com/add/",
        instagram: "https://www.instagram.com/",
        email: "mailto:",
      };
      return urlObj[url] + name;
    },
  },
};
</script>
<style lang="scss" scoped>
.SociaMediaLink {
  background-color: #cb2964;
  width: 3em;
  position: absolute;
  right: 0px;
  top: 50%;
  margin-top: -5em;
  border-radius: 5px;
  animation-name: flowRight;
  animation-duration: 0.9s;
}
ul {
  padding-inline-start: 0px;
  li {
    display: inline-block;
  }
}
a {
  width: 35px;
  height: 35px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
}
.instagram {
  background-image: url("https://img.icons8.com/material-outlined/48/ffffff/instagram-new--v2.png");
}
.twitter {
  background-image: url("https://img.icons8.com/material/48/ffffff/twitter--v1.png");
}
.snapchat {
  background-image: url("https://img.icons8.com/material-rounded/48/ffffff/snapchat.png");
}
.email {
  background-image: url("https://img.icons8.com/material-rounded/24/ffffff/important-mail.png");
}
@media screen and (min-width: 40em) {
  .SociaMediaLink {
    right: 1em;
  }
}
</style>
