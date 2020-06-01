<template lang="pug">
  div#navbar
    div.logo
      span.logo-text
    div.links
      a(@click="home") 首页
      //- router-link(to="/price") 会员
      a(@click="about") 关于我们
      a(@click="contactUs") 联系我们
      //- router-link(to="/user-agreement") 用户协议
</template>

<script>
import { scroller } from 'vue-scrollto/src/scrollTo'
export default {
  name: 'Navbar',
  methods: {
    home () {
      let home = scroller()
      home('#home')
    },
    about () {
      let about = scroller()
      about('#about')
    },
    contactUs () {
      let contactUs = scroller()
      contactUs('#contact-us')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  .logo {
    margin-left: 13vh;
    @media (max-width: 1080px) {
    margin: 0
    }
    &:before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 11vw;
      height: 7vw;
      background: url('./logo.png') no-repeat;
      background-size: contain;
    }
    .logo-text {
      font-size: 26px;
      display: inline-block;
      vertical-align: middle;
      color: #FFF;
      text-shadow: 1px 1px 3px #000;
    }
  }
  .links {
    line-height: 50px;
    a {
      font-size: 20px;
      text-decoration: none;
      color: #FFF;
      padding: 10px 20px;
      text-shadow: 1px 1px 3px #000;
      margin-right: 20px;
      @media (max-width: 750px) {
        font-size: 16px;
        padding: 2px 5px;
        margin-right: 0;
      }
      &.router-link-exact-active {
        background-color: rgba(255, 255, 255, .2);
        border-radius: 20px;
        @media (max-width: 750px) {
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
