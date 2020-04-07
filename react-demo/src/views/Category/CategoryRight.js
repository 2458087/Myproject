import React, { Component } from 'react';
import Axios from "axios"
import url from "url"  //cnpm install url --save
import IScroll from "iscroll"  //先下载 cnpm install iscroll --save
class CategoryRight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsListDatas: []
        }
        this.myScroll = null
    }
    componentDidMount() { //组件挂载完成
        this.getGoodsData(858)
        console.log(this.props)

    }
    componentWillReceiveProps(newProps) { //父子组件传值，只要props发生改变就执行这里的内容
        console.log(newProps)
        let query = url.parse(newProps.location.search, true).query
        let cid = query.cid
        console.log(query)
        if (cid) {
            this.getGoodsData(cid)
        }

    }
    scrollRight = () => { //定义一个滚动函数
        //阻止触摸移动事件的默认行为
        document.getElementById("scroll-right").addEventListener("touchmove", function (e) {
            console.log(123)
            e.preventDefault()
        }, false)
        this.myScroll = new IScroll("#scroll-right", {
            scrollX: false,
            ScrollY: true,
            preventDefault: false
        })

    }
    getGoodsData = (cid) => {
        Axios.get("/api/v4/catalog/list/" + cid).then((res) => {
            console.log(res.data.data)
            if (res.data.status == "success") {
                this.setState({
                    goodsListDatas: res.data.data
                }, () => {
                    this.scrollRight()
                })
            }
        })
    }
    render() {
        return (
            <div className="goods-content-wrap" id="scroll-right">
                <div>
                    {
                        this.state.goodsListDatas.map((goodsList, index) => {
                            return (
                                <div className="goods-wrap" key={index}>
                                    <div className="category-name">{goodsList.cat_name}</div>
                                    <div className="goods-item-wrap">
                                        {
                                            goodsList.child.map((goods, index) => {
                                                return (
                                                    <ul key={index}>
                                                        <li><img src={goods.touch_icon} alt="" /></li>
                                                        <li>{goods.cat_name}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default CategoryRight;

//组件加载的时候都执行那些生命周期
//1、constructor    2、componentWillMount    3、render   4、componentDidMount

//组件数据更新的时候   

// shouldComponentUpdate 判断是否更新数据  有一个返回值true或者false
// componentWillUpdate  组件将要更新
    //render()
// componentDidUpdate   组件更新之后

//组件销毁
//componentWillUnmount

//componentWillReceiveProps  父子组件传值，只要props发生变化，就触发这个生命周期函数


