<template lang="pug">
  div
    navbar.navbar
    div#home.home
      div.slogan
      div.downloads
        div.qrcode.wechat
          img(src="./assets/qrcode.png")
      video.video-bg(muted src="https://zajy-public.oss-cn-beijing.aliyuncs.com/web-app/video.mp4", autoplay, loop)
    div#about.about
      div.about-images
      div.about-content
        h3 关于我们
        p 西安挚爱佳缘网络科技有限公司于2019年创立，位于陕西省西安市高新区，法定代表人李国栋，公司注册资本1000万元。公司成立前期经过了长达数年的筹备与策划，努力争取为老百姓打造一个全新的婚恋文化体系，做出一个真正实用于民的相亲软件。
        p 挚爱佳缘APP是西安挚爱佳缘网络科技有限公司集结了陕西省顶尖的产品策划与软件开发团队，历时半年时间打磨出来的婚恋直播平台。挚爱佳缘本着更安全、更高效、更真实、更严谨的服务宗旨，为广大单身人士服务，希望能构建起一个完整的婚恋文化体系。同时我们坚决维护用户的个人隐私和个人权益，将用户的信息安全摆在第一位，保证每一位用户在安全的前提下能享受到最好的婚恋交友服务。在线上APP服务的过程中，我们又对线下业务进行了更多的拓展与创新，多种多样高参与度的线下活动让婚恋不仅仅停留在线上和活跃分子中，更深入到每一个用户的生活之中，更加行之有效的为组件和睦家庭和构建和谐社会贡献出我们的一份力量。
        p 欢迎体验挚爱佳缘的服务！
    div#contact-us.contact-us
      div.contact-us-content
        h3 联系我们
        div.contact-card
          div.card(
            v-for="(item,index) in cardList"
            :key="index"
            @mouseover="mouseover(index)"
            @mouseleave= "mouseleave"
            :class="cardId === index ? 'card-hover' : ''"
             )
            img(:src="item.images")
            div {{item.text}}
            div {{item.hrefs}}
      div.contact-us-images
</template>
<script>
import Navbar from '@/components/nav-bar'
export default {
  name: 'home',
  components: {
    Navbar
  },
  data () {
    return {
      cardList: [
        {
          images: require('./assets/icon1.png'),
          text: '官网网址',
          hrefs: 'www.zhiai2019.com',
          border: '#ff477a'
        },
        {
          images: require('./assets/icon2.png'),
          text: '官方邮箱',
          hrefs: 'service@zhiai2019.com',
          border: '#35c795'
        },
        {
          images: require('./assets/icon3.png'),
          text: '市场合作',
          hrefs: 'service@zhiai2019.com',
          border: '#856bfa'
        },
        {
          images: require('./assets/icon4.png'),
          text: '举报',
          hrefs: 'service@zhiai2019.com',
          border: '#ff9453'
        }
      ],
      cardId: ''
    }
  },
  methods: {
    mouseover (i) {
      this.cardId = i
    },
    mouseleave () {
      this.cardId = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar{
  position: fixed;
  top: 0;
  right: 0
}

.home {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -100;
  }
  .slogan {
    margin-left: 22vw;
    color: #FFF;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.35);
    @media (max-width: 1080px) {
      margin: 20px;
    }
    h2 {
      font-size: 65px;
      font-weight: normal;
      @media (max-width: 1080px) {
        font-size: 28px;
      }
    }
    p {
      font-size: 40px;
      @media (max-width: 1080px) {
        font-size: 20px;
      }
      font-weight: normal;
    }
  }
  .downloads {
    margin-right: 10vw;
    @media (max-width: 1080px) {
      margin: 0;
    }
    .qrcode {
      img {
        margin: 20px auto 0;
        display: block;
        width: 80%;
      }
      p {
        margin: 0;
        &:before {
          content: '';
          display: inline-block;
          vertical-align: middle;
          width: 40px;
          height: 40px;
          background-size: cover;
          @media (max-width: 750px) {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}
.about{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url('./assets/about.jpg') no-repeat;
  background-size: cover;
  position: relative;
  &::after{
    content: "";
    height: 6px;
    width: 48px;
    position: absolute;
    right: 18vw;
    bottom: 5vh;
    background-image: linear-gradient(-90deg,
    #d257f8 0%,
    #5071ff 100%);
    @media (max-width: 1080px) {
      right: 1vw;
      bottom: 5vh;
    }
  }
  &-images{
    height: 100vh;
    width: 48vw;
    background: url('./assets/qqqq.png') no-repeat;
    background-position: center ;
    background-size: contain;
  }
  &-content{
    width: 27vw;
    margin-right: 18vw;
    color: #101727;
    @media (max-width: 1080px) {
      margin-right: 30px;
    }
    h3 {
      text-align: right;
      font-size: 30px;
      position: relative;
      padding: 20px;
      &::after{
        content: "About Us";
        color: rgba(79,13, 255, .14);
        font-size: 50px;
        position: absolute;
        top: 35px;
        right: 20px;
      }
    }
    p {
      font-size: 14px;
    }
  }
}
.contact-us{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url('./assets/us.jpg') no-repeat;
  background-size: cover;
  position: relative;
  &::after{
    content: "";
    height: 6px;
    width: 48px;
    position: absolute;
    right: 18vw;
    bottom: 5vh;
    background-image: linear-gradient(-90deg,
    #d257f8 0%,
    #5071ff 100%);
    @media (max-width: 1080px) {
      right: 1vw;
      bottom: 5vh;
    }
  }
  &-content{
    width: 32vw;
    margin-left: 18vw;
    @media (max-width: 1080px) {
      margin-left: 30px;
    }
    h3 {
      font-size: 30px;
      position: relative;
      padding: 20px;
      &::after{
        content: "Contact Us";
        color: rgba(79,13, 255, .14);
        font-size: 50px;
        position: absolute;
        top: 35px;
        left: 20px;
      }
    }
    .contact-card{
      display: flex;
      justify-content: space-between;
      flex-flow:row wrap;
      .card{
        background: #fff;
        margin-top: 3vw;
        width:15vw;
        height: 18vw;
        text-align: center;
        box-shadow: 0px 6px 14px 0px
        rgba(22, 29, 46, 0.1);
        border-radius: 10px;
        overflow: hidden;
        img{
          margin-top: 3vw;
          width: 4vw;
          height: 4vw;
        }
        div{
          line-height: 2;
          font-size: 20px;
          color: #101727;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          @media (max-width: 1080px) {
            font-size: 14px;
          }
        }
        $one: #ff477a;
        $two: #35c795;
        $three: #856bfa;
        $fore: #ff9453;
        $borderBottom:($one $two $three $fore);
        @for $i from 1 to length($borderBottom)+1 {
          &:nth-child(#{$i}) {
            border-bottom: 2px solid nth($borderBottom,$i);
          }
        }
      }
      .card-hover{
        transform: scale(1.1);
        z-index: 1;
      }
    }
  }
  &-images{
    height: 100vh;
    width: 48vw;
    background: url('./assets/www.png') no-repeat;
    background-position: right center ;
    background-size: contain;
  }
}
@keyframes blink {
  50% { opacity: 0; }
}
</style>
