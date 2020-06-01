<template lang="pug">
  swiper#swiper(:options="swiperOption", ref="slide")
    swiper-slide(v-for="(slide, index) in slides", :key="index", :class="'pic-' + slide")
    div.swiper-pagination(slot="pagination")
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'Swiper',
  data () {
    return {
      slides: [...Array(4).keys()],
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
#swiper {
  position: fixed;
  height: 100vh;
  width: 100vw;
  .swiper-slide {
    background-size: cover;
    background-position: center;
    @for $i from 0 through 3 {
      &.pic-#{$i} {
        background-image: url('./assets/t#{$i}.jpg')
      }
    }
  }
  .swiper-pagination {
    bottom: 150px;
    .swiper-pagination-bullet {
      background-color: rgba(255, 255, 255, 0.15);
      width: 15px;
      height: 15px;
      @media (max-width: 750px) {
        width: 5px;
        height: 5px;
      }
      &.swiper-pagination-bullet-active {
        background-color: rgba(255, 255, 255, 0.6);
        width: 29px;
        border-radius: 6px;
        @media (max-width: 750px) {
          width: 10px;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
