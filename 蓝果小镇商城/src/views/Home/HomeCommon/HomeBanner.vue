<!-- 首页轮播图组件 -->
<template>
  <div class="home-banner" id="banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="homeBannerData in homeBannerDatas" :key="homeBannerData.id">
        <img :src="homeBannerData.imgsrc" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      homeBannerDatas: [
        {
          id: "1",
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
        },
        {
          id: "2",
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56e491c83bde043ca4e8ff2d8255dfef.jpg?w=2452&h=920"
        },
        {
          id: "3",
          imgsrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3fe21565e2e18ebbec66f83c01d8a9e3.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
        }
      ]
    };
  }
};
</script>
<style lang='less'>
//@import url(); 引入公共css类
.home-banner {
  margin-top: 1.3rem;
  height: 4.5rem;
  img {
    width: 100%;
    height: 4.5rem;
  }
}
</style>