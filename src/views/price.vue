<template lang="pug">
  div.price.page-content
    img(src="../assets/price.png")
</template>
<style lang="scss" scoped>
.price {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3vw;
  width: 50vw;
  margin: 0 auto;
  color: #FFF;
  background: rgba(0, 0, 0, 0.3);
  @media (max-width: 750px) {
    width: 90vw;
  }
  img {
    display: block;
    max-width: 100%;
    margin: 20px auto;
  }
}
</style>
