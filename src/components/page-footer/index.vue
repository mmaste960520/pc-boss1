<template lang="pug">
  footer#footer
    p
     span 2019 © 挚爱佳缘
     a(href="http://beian.miit.gov.cn", target="_blank") 陕ICP备19014018号-1
     //- router-link(to="/telecom") 增值电信业务经营许可证：陕B2-20190119
     //- router-link(to="/business-license") 营业执照
     span 增值电信业务经营许可证：陕B2-20190119
     span 营业执照
    p
      a(href="http://www.12377.cn/", target="_blank") 中国互联网举报中心
      span 网络文化许可证-陕网文-（2019）4565-050号
      span 违法和不良信息举报：400-1131-499
      span 举报邮箱：
        a(href="mailto://service@zhiai2019.com") service@zhiai2019.com
    p
      //- a.police(href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61019002000908", target="_blank") 陕公网安备 61019002000908号
      span.police 陕公网安备 61019002000908号
      span 版权所有:西安挚爱佳缘网络科技有限公司
    p
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
#footer {
  height: 478px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  padding-top: 50px;
  box-sizing: border-box;
  color: #101727;
  text-align: center;
  background: url('./assets/footer.png') no-repeat;
  background-size: 100% 478px;
  @media (max-width: 1280px) {
    font-size: 12px;
    flex-wrap: wrap-reverse;
  }
  p {
    display: inline-block;
    width: 76vw;
    a {
      color: #ee3880;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    span,
    a {
      margin-right: 10px;
    }
    .police {
      &:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        background-image: url('./assets/police.png');
      }
    }

  }
  p:last-child{
    margin: 0;
    display: inline-block;
    height: 5vw;
    width: 5vw;
    background: url('./assets/icon.png') no-repeat center ;
    background-size: contain;
  }
}
</style>
