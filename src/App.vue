<template lang="pug">
  div#app
    home
    page-footer.z-index-1
</template>

<script>
import PageFooter from '@/components/page-footer'
import Home from '@/views/home'
export default {
  name: 'App',
  components: {
    PageFooter,
    Home
  }

}
</script>

<style lang="scss">
body {
  margin: 0;
}

</style>
