<!-- 首页内容组件 -->
<template>
  <div class="main">
    <div class="main-box">
      <div class="main-product">
        <div class="main-product-list">
          <img src="../../../img/0099822e42b4428cb25c4cdebc6ca53d.webp" alt srcset />
          <p>小米10</p>
          <p>骁龙865/1亿像素相机</p>
          <div class="price-box">
            <p class="price">￥3999元起</p>
          </div>
        </div>
        <div class="main-product-list">
          <img src="../../../img/2c16238f786e4f93bdb175d7bf21aa47.webp" alt srcset />
          <p>Redmin K30</p>
          <p>120Hz流速屏，全速热爱</p>
          <div class="price-box">
            <p class="price">￥1699元起</p>
          </div>
        </div>
      </div>
      <div class="main-product">
        <div class="main-product-list">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=250&h=250&f=webp&q=90"
            alt
            srcset
          />
          <p>Redmin K30</p>
          <p>120Hz流速屏，全速热爱</p>
          <div class="price-box">
            <p class="price">￥1699元起</p>
          </div>
        </div>
        <div class="main-product-list">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07270cc09689eb9b13b29aa9f6bc41eb.jpg?thumb=1&w=250&h=250&f=webp&q=90"
            alt
            srcset
          />
          <p>Redmin K30</p>
          <p>120Hz流速屏，全速热爱</p>
          <div class="price-box">
            <p class="price">￥1699元起</p>
          </div>
        </div>
      </div>
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
<style lang='less'>
//@import url(); 引入公共css类
.main-box {
  width: 100%;
  height: 1.5rem;
  .main-product {
    display: flex;
    .main-product-list {
      width: 50%;
      margin-top: 0.3rem;
      border: 1px solid #ccc;
      img {
        width: 100%;
      }
      p {
        margin: 0;
        font-size: 0.4rem;
        text-align: center;
      }
      .price-box {
        .price {
          font-size: 0.5rem;
          color: red;
        }
      }
    }
  }
}
</style>