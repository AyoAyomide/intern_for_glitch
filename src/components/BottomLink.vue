<template>
  <div class="Bottom_Link">
    <div class="left">
      <a>Home</a>
      <a>About</a>
    </div>
    <div class="right">
      <img
        src="https://images.unsplash.com/photo-1522390108011-5f8667fd551d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
      <a>Gallery</a>
      <a>Contact</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Bottom_Link {
  display: flex;
  width: inherit;
  margin-top: 2em;
  margin-bottom: 1em;
  animation-name: show;
  animation-duration: 2s;
  div {
    width: 50%;
    display: flex;
    a {
      margin: auto;
      text-transform: capitalize;
      letter-spacing: 1px;
      font: {
        weight: 100;
        family: "Quicksand", sans-serif;
        size: 12px;
      }
      color: white;
    }
  }
  .left {
    text-align: right;
    padding-right: 2em;
  }
  .right {
    text-align: left;
    img {
      border: 1px solid white;
      float: left;
      width: 3em;
      height: 3em;
      object-fit: cover;
      border-radius: 100%;
      margin-left: -1.5em;
    }
  }
}
@media screen and (min-width: 40em) {
  .Bottom_Link {
    margin-top: 1em;
    margin-bottom: 0em;
    div {
      display: inline-block;
      a {
        letter-spacing: 5px;
        display: inline-block;
        margin: auto 1.8em;
        margin-top: 1.6em;
        font-size: 1em;
        cursor: pointer;
      }
      // effect for hover
      a::after {
        content: "";
        width: 0px;
        margin-top: 2px;
        height: 2px;
        display: block;
        background: rgb(253, 253, 253);
        transition: 300ms;
      }

      a:hover::after {
        width: 100%;
      }
    }
    .left {
      padding-right: 1.5em;
    }
    .right {
      img {
        width: 5em;
        height: 5em;

        margin-left: -2.5em;
      }
    }
  }
}
</style>
