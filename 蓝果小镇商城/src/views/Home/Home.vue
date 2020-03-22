<!-- 首页组件 -->
<template>
  <div class="home">
    <HomeHeader />
    <HomeBanner />
    <HomeMain />
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import HomeHeader from "./HomeCommon/HomeHeader.vue";
import HomeBanner from "./HomeCommon/HomeBanner.vue";
import HomeMain from "./HomeCommon/HomeMain.vue";
import Footer from "@/components/Footer.vue";
// import { headerFn } from "@/assets/js/index.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    HomeHeader,
    HomeBanner,
    HomeMain,
    Footer
  },
  data() {
    //这里存放数据
    return {};
  }
};
</script>
<style lang='less'>
//@import url(); 引入公共css类
</style>