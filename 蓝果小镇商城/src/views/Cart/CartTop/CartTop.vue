<!-- 购物车头部组件 -->
<template>
  <div class="cart-top">
    <div class="header">
      <a href class="icon-left">
        <svg
          t="1584869401283"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2635"
          width="32"
          height="32"
        >
          <path
            d="M654.222222 820.622222c-5.499259 0-10.903704-2.085926-15.075555-6.257778l-284.444445-284.444444c-8.343704-8.343704-8.343704-21.807407 0-30.151111l0.474074-0.474074 283.970371-283.970371c8.343704-8.343704 21.807407-8.343704 30.151111 0s8.343704 21.807407 0 30.151112L399.928889 514.844444l269.368889 269.368889c8.343704 8.343704 8.343704 21.807407 0 30.151111-4.171852 4.171852-9.576296 6.257778-15.075556 6.257778z"
            p-id="2636"
            fill="#e6e6e6"
          />
        </svg>
      </a>
      <span>购物车</span>
      <i class="icon-right">
        <svg
          t="1584869781887"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3621"
          width="32"
          height="32"
        >
          <path
            d="M213.333333 597.333333a85.333333 85.333333 0 1 1 85.333334-85.333333 85.333333 85.333333 0 0 1-85.333334 85.333333z m0-136.533333a51.2 51.2 0 1 0 51.2 51.2 51.413333 51.413333 0 0 0-51.2-51.2zM512 597.333333a85.333333 85.333333 0 1 1 85.333333-85.333333 85.333333 85.333333 0 0 1-85.333333 85.333333z m0-136.533333a51.2 51.2 0 1 0 51.2 51.2 51.413333 51.413333 0 0 0-51.2-51.2zM810.666667 597.333333a85.333333 85.333333 0 1 1 85.333333-85.333333 85.333333 85.333333 0 0 1-85.333333 85.333333z m0-136.533333a51.2 51.2 0 1 0 51.2 51.2 51.413333 51.413333 0 0 0-51.2-51.2z"
            p-id="3622"
            fill="#e6e6e6"
          />
        </svg>
      </i>
    </div>
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
    return {};
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.cart-top {
  width: 100%;
  height: 1.3rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #008742;
  z-index: 9999;
  .header {
    display: flex;
    .icon-left {
      display: block;
      width: 17%;
      height: 1.3rem;
      padding-top: 0.1rem;
    }
    span {
      display: block;
      width: 70%;
      height: 1.3rem;
      color: white;
    }
    .icon-right {
      width: 17%;
      height: 1.3rem;
      padding-top: 0.1rem;
    }
  }
}
</style>