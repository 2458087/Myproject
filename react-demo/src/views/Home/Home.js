import React, { Component } from 'react';
import Swiper from "swiper"  //cnpm install swiper --save
import "../../assets/css/index.css"
import "../../assets/css/swiper.min.css"
class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollData: false,  //定义的是数据
            bannerLists: [{
                id: 1,
                imgsrc: "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792291627.jpg"
            }, {
                id: 2,
                imgsrc: require("../../assets/images/home/banner_2.jpg")
            }, {
                id: 3,
                imgsrc: require("../../assets/images/home/banner_3.jpg")
            }, {
                id: 4,
                imgsrc: require("../../assets/images/home/banner_4.jpg")
            }, {
                id: 5,
                imgsrc: require("../../assets/images/home/banner_5.jpg")
            }],
            product: [{
                id: 1,
                imgsrc: require("../../assets/images/home/4.jpg")
            }]
        }
        this.scrollDastas = true  //给构造函数添加一个属性
    }
    componentDidMount() {  //生命周期，组件挂载之后
        this.getBanner()
        window.addEventListener("scroll", this.scrollFn.bind(this), false) //事件绑定
    }
    componentWillUnmount() { //组件销毁的时候执行
        this.scrollDastas = false
        window.removeEventListener("scroll", this.scrollFn.bind(this))  //事件解绑
    }
    getBanner = () => {
        new Swiper(".swiper-container", {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    scrollFn = () => {
        console.log("123")
        if (this.scrollDastas) { //
            let iscrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if (iscrollTop > 100) {
                this.setState({
                    scrollData: true
                })
            } else {
                this.setState({
                    scrollData: false
                })
            }
        }
    }
    render() {
        return (
            <div className="page">
                {/* 头部搜索 */}
                <div className={this.state.scrollData ? "search-header bg-red" : "search-header"}>
                    <div className="category-icon"></div>
                    <div className="search-wrap">
                        <div className="search-icon"></div>
                        <div className="search-text">请输入宝贝名称搜索</div>
                    </div>
                    <div className="login-wrap">
                        <div className="login-text">登录</div>
                    </div>
                </div>
                {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.bannerLists.map((banner, key) => {
                                return (
                                    <div className="swiper-slide" key={key}>
                                        <img src={banner.imgsrc} alt="" />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/*产品列表 */}
                <div className="product">
                    <div className="products">
                        <ul>
                            <li>
                                <img src={[require("../../assets/images/home/4.jpg")]} alt="" />
                                <h3>小米10</h3>
                                <div class="price">
                                    <p>4999</p>
                                    <p></p>
                                </div>
                                <div class="info">
                                    <p>新品</p>
                                    <p>销量：10</p>
                                </div>
                            </li>
                            <li>
                                <img src={[require("../../assets/images/home/3.jpg")]} alt="" />
                                <h3>小米10</h3>
                                <div class="price">
                                    <p>3999</p>
                                    <p></p>
                                </div>
                                <div class="info">
                                    <p>新品</p>
                                    <p>销量：10</p>
                                </div>
                            </li>
                            <li>
                                <img src={[require("../../assets/images/home/111.jpg")]} alt="" />
                                <h3>小米10</h3>
                                <div class="price">
                                    <p>4999</p>
                                    <p></p>
                                </div>
                                <div class="info">
                                    <p>新品</p>
                                    <p>销量：10</p>
                                </div>
                            </li>
                            <li>
                                <img src={[require("../../assets/images/home/111.jpg")]} alt="" />
                                <h3>小米10</h3>
                                <div class="price">
                                    <p>4999</p>
                                    <p></p>
                                </div>
                                <div class="info">
                                    <p>新品</p>
                                    <p>销量：10</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;