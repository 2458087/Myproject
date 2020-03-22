<!-- 购物车组件 -->
<template>
  <div class="cart">
    <CartTop />
    <h2>购物车组件</h2>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CartTop from "./CartTop/CartTop.vue";
import Footer from "@/components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CartTop,
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