<!-- 案例展示 -->
<template>
  <div class="box">
    <div class="contact-img">
      <div class="contact-banner">
        <img src="../images/contact-banner.jpg" alt srcset />
      </div>
    </div>
    <div class="now-address">
      <div class="title">
        <p>当前位置:首页>液晶拼接案例</p>
      </div>
    </div>
    <div class="contact-main">
      <div class="main-left">案例展示</div>
      <div class="main-right">
        <p>右边部分</p>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
//@import url(); 引入公共css类
.contact-img {
  width: 100%;
  height: 240px;
}
.now-address {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #ccc;
}
.now-address .title {
  width: 1100px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
}
.contact-main {
  width: 1100px;
  height: 300px;
  margin: 0 auto;
}
.main-left,
.main-right {
  float: left;
}
.main-left {
  width: 100px;
  height: 150px;
  border: 2px solid #ccc;
}
.main-right {
  width: 900px;
  height: 150px;
  font-size: 14px;
  line-height: 24px;
}
</style>