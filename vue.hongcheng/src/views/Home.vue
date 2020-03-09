<template>
  <div class="home">
    <div class="banner">
      <ul class="banner-img">
        <li class="show">
          <img src="../assets/img/banner01.jpg" alt="banner01" />
        </li>
        <li>
          <img src="../assets/img/banner02.jpg" alt="banner02" />
        </li>
      </ul>
      <ul class="pointer">
        <li class="active"></li>
        <li></li>
      </ul>
      <img src="../assets/img/left.png" id="left" alt="left" />
      <img src="../assets/img/right.png" id="right" alt="right" />
    </div>
    <!-- ban结束 -->
    <div class="con">
      <div class="con-top">
        <ul class="new">
          <li class="new1">
            <div class="new1-1">
              关于我们
              <span class="add1">查看更多+</span>
            </div>
            <img src="../assets/img/about.jpg" />
            <p
              class="new1-p"
            >我们是一家显示系统的研发，显示版面销售我们是一家显示系统的研发，显示版面销售我们是一家显示系统的研发，显示版面销售我们是一家显示系统的研发，显示版面销售</p>
          </li>
          <li class="new2">
            <div class="new2-1">
              新闻动态
              <span class="add2">更多新闻</span>
            </div>
            <div class="new2-2">
              <span class="new2-box">
                <p class="new-box1">LED液晶显示屏</p>面销售我们是一家显示系统的研发，显示版面销售我们是一家显示系统的研发，显示版面销售我们是一家显示系统的研发
              </span>
              <div class="new2-img">
                <img src="../assets/img/newspic.jpg" />
              </div>
            </div>
            <div class="new2-3">
              <p>
                液拼接技术得到突破迈向更小的间隙
                <br />液拼接技术得到突破迈向更小的间
                <br />液拼接技术得到突破迈向更小的间隙
                <br />
              </p>
            </div>
          </li>
          <li class="new3">
            <div class="new3-1">
              关于我们
              <span class="add1">查看更多+</span>
            </div>
            <img src="../assets/img/contact.jpg" />
            <div class="new3-p">
              <img src="../assets/img/email.png" /> 邮箱:57879999
              <br />
              <img src="../assets/img/fax.png" />
              传真:779003211146
              <br />
              <img src="../assets/img/addr.png" />
              地址:河南河南河南河南河南
              <br />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新闻部分结束 -->
    <div class="con-bom">
      <div class="new-bom">产品中心</div>
      <div class="min-box">更多产品</div>
    </div>
    <div class="new-ban">
      <ul class="bot">
        <li>
          <img src="../assets/img/product01.jpg" />
        </li>
        <li>
          <img src="../assets/img/product02.jpg" />
        </li>
        <li>
          <img src="../assets/img/product03.jpg" />
        </li>
        <li>
          <img src="../assets/img/product04.jpg" />
        </li>
      </ul>
    </div>
    <!-- 广告图结束 -->
  </div>
</template>



<style lang="less" scoped>
.banner {
    width: 100%;
    height: 480px;
    margin: 0px auto;
    position: relative;
}
.banner-img li{
    position: absolute;
    top: 0px;
    left: 0px;
    display: none;
}
.banner-img img {
    width: 100%;
}
.banner-img .show {
    display: block;
}
.pointer {
    width: 70px;
    height: 20px;
    position: absolute;
    left: 50%;
    bottom: 25px;
    margin-left: -35px;
    z-index: 10;
}
.pointer li {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #4b4b4b;
    float: left;
    margin-left: 8px;
}
.pointer .active {
    background-color: red;
}
.banner>img:first-of-type {
    position: absolute;
    top: 50%;
    left: 80px;
    margin-top: -30px;
}
.banner>img:last-of-type {
    position: absolute;
    top: 50%;
    right: 80px;
    margin-top: -30px;
}

//轮播图

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
	list-style: none;
	}
.top-ul a{
	text-decoration: none;
	}
 li a:hove{
	color: red;
	}	
/*顶部结束*/
.ban{
	width: 100px;
	height: 480px;
	position: relative;
	margin: 0 auto;
}
.ban-img li{
	position: absolute;
	top: 0;
	left: 0;
	/*display: none;*/
}
.ban-img img{
	width: 100%;
}

.point{
	width: 70px;
	height: 20px;
	position: absolute;
	left: 50%;
	bottom: 0;
}
	/*ban结束*/
	.con{
		width: 1100px;
		height: 260px;
		margin: 0 auto;
	}
	.con-top{
		margin: 0;
		width: 1100px;
		height: 260px;
	}
	.new1{
		width: 352px;
		height: 260px;
		float: left;
	}
	.new1-p{
		color: #b3a4a4;
		font-size: 12px;
		line-height: 34px;
		font-family: "宋体";
	}
	.new2{
		width: 352px;
		height: 260px;
		float: left;
		margin-left: 20px;
		margin-right: 20px;
	}
	.new3{
		width: 352px;
		height: 260px;
		float: left;
	}
	.new1-1{
		width: 352px;
		height: 20px;
		margin-top: 3px;
		padding-left: 2px;
		border-left: 3px solid red;
	}
	.new1 img{
		width: 352px;
		margin-top: 20px;
		margin-bottom: 10px;
	}
	.add1{
		margin-left: 232px;
		color: #ccc;
		font-family: "宋体";
		font-size: 10px

	}
	.add2{
		margin-left: 232px;
		color: #ccc;
		font-family: "宋体";
		font-size: 10px

	}
	.new2-1{
		width: 352px;
		height: 20px;
		margin-top: 3px;
		padding-left: 2px;
		border-left: 3px solid red;
	}
	.new2-2{
		width: 352px;
		height: 93px;
		position: relative;
	}
	.new2-box {
		margin-top: 20px;
		width: 180px;
		height: 93px;
		display: block;
		color: #b3a4a4;
		font-size: 10px;
		line-height: 22px;
		font-family: "宋体";
	}
	.new-box1{
		color: #000;
		font-weight: bold;
		line-height: 30px;
	}
	.new2-img img{
		/*width: 40px;*/
		height: 93px;
		float: right;
		position: absolute;
		top: 0px;
		right: 0;

	}
	.new2-3{
		width: 352px;
		margin-top: 14px;
	}
	.new2-3 p{
		width: 352px;
		color: #b3a4a4;
		line-height: 34px;
		font-size: 12px;
		font-family: "宋体"

	}
	.new3-1{
		width: 352px;
		height: 20px;
		margin-top: 3px;
		padding-left: 2px;
		border-left: 3px solid red;
	}
	.new3-1{
		width: 352px;
		height: 20px;
		margin-top: 3px;
		padding-left: 2px;
		border-left: 3px solid red;
	}
	.new3 img{
		width: 352px;
		margin-top: 20px;
		margin-bottom: 10px;
	}
	.add3{
		margin-left: 232px;
		color: #ccc;
		font-family: "宋体";
		font-size: 10px
	}
	.new3-p{
		width: 352px;
		height: 110px;
		color: #b3a4a4;
		font-family: "宋体";
		font-size: 12px
	}
	.new3-p img{
		margin: 0;
		padding: 0;
		margin-top: 20px;
		width: 10px;
		height: 10px;
	}
	/*新闻部分结束*/
	.con-bom{
		width: 1100px;
		height: 20px;
		margin: 0 auto;
		position: relative;
	}
	.new-bom{
		width: 1100px;
		height: 20px;
		padding-left: 5px;
		border-left: 3px solid red;
	}
	.min-box{
		width: 70px;
		height: 20px;
		color: #fff;
		float: right;
		line-height: 20px;
		text-align-last: center;
		font-family: "宋体";
		font-size: 12px;
		background-color: red;
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 15px 15px 15px 15px;
	}
	.new-ban{
		width: 1100px;
		height: 220px;
		margin: 0 auto;
		border: 1px solid;
	}
	.bot img{
		width: 240px;
		height: 220px;
		float: left;
		margin-left: 15px;
	}
</style>


<script>
export default {
  mounted(){
    var oLeft = document.getElementById("left");
var oRight = document.getElementById("right");
var oImg = document.getElementsByClassName("banner-img")[0];
var oLis = oImg.getElementsByTagName("li");
var oPointer = document.getElementsByClassName("pointer")[0];
var oPoLis = oPointer.getElementsByTagName("li");
var timer = null;
var num = 0;
console.log(oLeft)
console.log(oRight)
console.log(oImg)
console.log(oLis)
console.log(oPoLis)
console.log(oPointer)
// 左右点击事件
oLeft.onclick = function(){
    num--;
    num =(num<0) ? oLis.length-1 :num;
    changeImg()
}
oRight.onclick = function(){
    num++;
    num =(num>oLis.length-1) ? 0:num;
    changeImg()
}
//设置切换图片的函数
function changeImg(){
    for(var i=0;i<oLis.length;i++){
        oLis[i].className = "";
        oPoLis[i].className = "";
    }
    oLis[num].className = "show";
    oPoLis[num].className = "active"
}
//设置鼠标点击圆点事件

for(var i=0;i<oPoLis.length;i++){
    oPoLis[i].index = i;
    oPoLis[i].onclick = function(){
        for(var j=0;j<oLis.length;j++){
            oLis[j].className = "";
            oPoLis[j].className = "";
        }
        this.className = "active";
        oLis[this.index].className="show";
        num = this.index ;
    }
}
//设置自动播放事件
timer = setInterval(function(){
    oRight.onclick()
}, 2000);
//设置鼠标移入移出事件
oPointer.onmouseover = function(){
    clearInterval(timer)
}
oPointer.onmouseout =function(){
    timer = setInterval(function(){
       oRight.onclick()
    }, 2000);
}
  }
}
</script>


