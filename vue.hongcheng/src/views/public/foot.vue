<!-- 页脚 -->
<template>
  <div class="footer">
    <div class="footer-left">
      <p>
        关于我们&nbsp;&nbsp;|&nbsp;&nbsp;产品中心&nbsp;&nbsp;|&nbsp;&nbsp;新闻动态&nbsp;&nbsp;|&nbsp;&nbsp;解决方案&nbsp;&nbsp;|&nbsp;&nbsp;案例展示&nbsp;&nbsp;|&nbsp;&nbsp;联系我们
        <br />宏程科技宏程科技宏程科技宏程科技宏程科技
      </p>
      <div class="footer-right">
        友情链接：
        <select>
          <option>爱城科技1</option>
          <option>爱城科技2</option>
          <option>爱城科技3</option>
          <option>爱城科技4</option>
        </select>
      </div>
    </div>
  </div>
</template>
<style lang='less' scoped>
//@import url(); 引入公共css类

.footer {
  width: 100%;
  height: 240px;
  margin-top: 20px;
  background-image: url(../../assets/img/footer_bg.png);
}
.footer-left {
  width: 1100px;
  height: 240px;
  margin: 0 auto;
  position: relative;
}
.footer-left p {
  color: #fff;
  font-size: 14px;
  padding-top: 50px;
  line-height: 90px;
  float: left;
}
.footer-right {
  width: 200px;
  height: 30px;
  color: #fff;
  position: absolute;
  top: 100px;
  right: 0;
}
</style>