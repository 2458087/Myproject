import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import asyncComponent from "../../components/AsyncComponent"
import Axios from "axios"
import IScroll from "iscroll"  //先下载 cnpm install iscroll --save
import "../../assets/css/category.css"
const CategoryRight = asyncComponent(() => import("./CategoryRight"))
class CategoryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryListDatas: []
        }
        this.myScroll = null
        this.setListDatas = []   //给构造函数添加一个属性
        this.cid = "858"
    }
    componentDidMount() { //组件挂载完成
        this.getCategoryData()
        this.setCategoryData()

    }
    scrollLeft = () => { //定义一个滚动函数
        //阻止触摸移动事件的默认行为
        document.getElementById("scroll-left").addEventListener("touchmove", function (e) {
            console.log(123)
            e.preventDefault()
        }, false)
        this.myScroll = new IScroll("#scroll-left", {
            scrollX: false,
            ScrollY: true,
            preventDefault: false
        })

    }
    getCategoryData = () => {
        Axios.get("/api/v4/catalog/list").then((res) => {
            //console.log(res.data.data)
            if (res.data.status == "success") {
                this.setState({
                    categoryListDatas: res.data.data
                }, () => { //执行回调

                    this.scrollLeft()
                })
            }
        })
    }
    setCategoryData = () => {
        Axios.get("/api/v4/catalog/list").then((res) => {
            if (res.data.status == "success") {
                this.setListDatas = res.data.data
                //console.log(this.setListDatas)
                for (let i = 0; i < this.setListDatas.length; i++) {
                    this.setListDatas[i].flag = false
                }
                this.setState({ //分类数据设置成，有flag属性的数据
                    categoryListDatas: this.setListDatas
                }, () => {
                    this.scrollLeft()
                    this.defaultCategoryStyle()
                    //console.log(this.state.categoryListDatas)
                })
            }
        })
    }
    defaultCategoryStyle = () => {  //默认选中第一个
        if (this.setListDatas.length > 0) {
            for (let i = 0; i < this.setListDatas.length; i++) {
                if (this.setListDatas[i].cat_id == this.cid) {
                    this.setListDatas[i].flag = true
                    break;
                }
            }
            this.setState({
                categoryListDatas: this.setListDatas
            })
        }
    }
    replacePageUrl = (pageUrl) => {
        // console.log(this.props)
        this.props.history.replace(pageUrl)
    }
    changeCategoryStyle = (pageUrl, pageIndex) => { //点击分类，对应的分类选中
        if (this.setListDatas.length > 0) {
            for (let i = 0; i < this.setListDatas.length; i++) {
                this.setListDatas[i].flag = false
            }
        }
        this.setListDatas[pageIndex].flag = true
        this.setState({ //重新设置一下数据
            categoryListDatas: this.setListDatas
        })
        //console.log(pageUrl)
        this.replacePageUrl(pageUrl)
    }
    render() {
        return (
            <div className="pages">
                <div className="category-search">
                    <div className="back"></div>
                    <div className="search">
                        请输入宝贝名称
                        <span></span>
                    </div>
                </div>
                <div className="category-main">
                    <div id="scroll-left" className="category-left">
                        <div>
                            {
                                this.state.categoryListDatas.map((categoryList, index) => {
                                    return (
                                        <div className={categoryList.flag ? "category-item active" : "category-item"} key={index} onClick={this.changeCategoryStyle.bind(this, "/mobile/category?cid=" + categoryList.cat_id, index)}>{categoryList.cat_name}</div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="category-content">
                        <Switch>
                            <Route to="/mobile/category" component={CategoryRight}></Route>
                            <Redirect to="/mobile/category/items"></Redirect>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryComponent;