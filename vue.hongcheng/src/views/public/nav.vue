<!-- 公共导航头 -->
<template>
<div class='top'>
    <div class="top-left"><img src="../../assets/img/logo.jpg"></div>
    <div class="top-rigth"> 
        <img src="../../assets/img/phone.png"><span  class="phone">400-9675-168</span>
    </div>
    <div>
        <ul class="top-ul">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
            <li><router-link to="/product">产品中心</router-link></li>
            <li><router-link to="/new">新闻动态</router-link></li>
            <li><router-link to="/solve">解决方案</router-link></li>
            <li><router-link to="/show">案例展示</router-link></li>
            <li><router-link to="/contact">联系我们</router-link></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.top{
	width: 1100px;
	height: 100px;
	margin: 0 auto;
	position: relative;
}
.top-left img{
	margin-top:20px;
}
.top-rigth{
	width: 161px;
	height: 30px;
	position: absolute;
	top: 10px;
	right: 0;
}
.phone{
	font-size: 20px;
	margin-left: 8px;
	color: blue;
}
.top-ul{
	width: 582px;
	height: 70px;
	position: absolute;
	top: 20px;
	right: 0;
}
.top-ul li{
	margin-top: 32px;
	float: left;
	margin-left: 27px;
	font-family: "宋体";
	font-size: 14px;
	font-weight: bold;
}
.top-ul a{
	text-decoration: none;
}
</style>