<!-- 底部公共组件 -->
<template>
  <div class="footer">
    <ul>
      <router-link to="/home" tag="li">
        <div class="navimg">
          <i class="iconfont icon-shouye2" v-if="active==='home'"></i>
          <i class="iconfont icon-1" v-else></i>
        </div>
        <span>首页</span>
      </router-link>
      <router-link to="/category" tag="li">
        <div class="navimg">
          <i class="iconfont icon-leimupinleifenleileibie2" v-if="active==='category'"></i>
          <i class="iconfont icon-leimupinleifenleileibie" v-else></i>
        </div>
        <span>分类</span>
      </router-link>
      <router-link to="/cart" tag="li">
        <div class="navimg">
          <i class="iconfont icon-gouwucheman" v-if="active==='cart'"></i>
          <i class="iconfont icon-gouwuche" v-else></i>
        </div>
        <span>购物车</span>
      </router-link>
      <router-link to="/mine" tag="li">
        <div class="navimg">
          <i class="iconfont icon-wodedangxuan" v-if="active==='mine'"></i>
          <i class="iconfont icon-wode" v-else></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
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
      active: "home"
    };
  },
  mounted() {
    this.active = this.$route.path.slice(1);
  }
};
</script>
<style lang='less'>
//@import url(); 引入公共css类
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 2.3rem;
  background-color: #fff;
  ul {
    display: flex;
    height: 1.4rem;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ccc;
    padding: 0;
    li {
      width: 25%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 0.32rem;
      }
      .iconfont {
        font-size: 20px;
      }
    }
  }
}
.router-link-active {
  color: #599c78;
}
</style>