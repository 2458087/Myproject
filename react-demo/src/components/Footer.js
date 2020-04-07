import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import asyncComponent from "./AsyncComponent"  //引入封装的按需加载组件的模块
import "../assets/css/footer.css"
const HomeComponent = asyncComponent(() => import("../views/Home/Home"))
const CategoryComponent = asyncComponent(() => import("../views/Category/Category"))
const SearchComponent = asyncComponent(() => import("../views/Search/Search"))
const CartComponent = asyncComponent(() => import("../views/Cart/Cart"))
const MineComponent = asyncComponent(() => import("../views/Mine/Mine"))
class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeHome: true,
            activeCategory: false,
            activeSearch: false,
            activeCart: false,
            activeMine: false
        }
    }
    componentWillMount() { //组件挂载前
        this.hanleFooter(this.props)
    }
    componentWillReceiveProps(newprops) {  //父子组件传值，父组件修改通过props传值的时候触发
        this.hanleFooter(newprops)
    }
    goPage = (componentUrl) => {
        this.props.history.replace(componentUrl)
    }
    hanleFooter = (props) => {
        console.log(props.location.pathname)
        switch (props.location.pathname) {
            case "/mobile/home":
                this.setState({
                    activeHome: true,
                    activeCategory: false,
                    activeSearch: false,
                    activeCart: false,
                    activeMine: false
                })
                break;
            case "/mobile/category":
                this.setState({
                    activeHome: false,
                    activeCategory: true,
                    activeSearch: false,
                    activeCart: false,
                    activeMine: false
                })
                break;
            case "/mobile/search":
                this.setState({
                    activeHome: false,
                    activeCategory: false,
                    activeSearch: true,
                    activeCart: false,
                    activeMine: false
                })
                break;
            case "/mobile/cart":
                this.setState({
                    activeHome: false,
                    activeCategory: false,
                    activeSearch: false,
                    activeCart: true,
                    activeMine: false
                })
                break;
            case "/mobile/mine":
                this.setState({
                    activeHome: false,
                    activeCategory: false,
                    activeSearch: false,
                    activeCart: false,
                    activeMine: true
                })
                break;

            default:
                break;
        }
    }
    render() {
        return (
            <div>
                <React.Fragment>
                    <Switch>
                        <Route path={"/mobile/home"} component={HomeComponent}></Route>
                        <Route path={"/mobile/category"} component={CategoryComponent}></Route>
                        <Route path={"/mobile/search"} component={SearchComponent}></Route>
                        <Route path={"/mobile/cart"} component={CartComponent}></Route>
                        <Route path={"/mobile/mine"} component={MineComponent}></Route>
                    </Switch>
                </React.Fragment>
                <div className="footer">
                    <ul onClick={this.goPage.bind(this, "/mobile/home")}>
                        <li className={this.state.activeHome ? "icon home-active" : "icon home"}></li>
                        <li className={this.state.activeHome ? "text-active" : "text"}>首页</li>
                    </ul>
                    <ul onClick={this.goPage.bind(this, "/mobile/category")}>
                        <li className={this.state.activeCategory ? "icon category-active" : "icon category"}></li>
                        <li className={this.state.activeCategory ? "text-active" : "text"}>分类</li>
                    </ul>
                    <ul onClick={this.goPage.bind(this, "/mobile/search")}>
                        <li className={this.state.activeSearch ? "icon search-active" : "icon search"}></li>
                        <li className={this.state.activeSearch ? "text-active" : "text"}>搜索</li>
                    </ul>
                    <ul onClick={this.goPage.bind(this, "/mobile/cart")}>
                        <li className={this.state.activeCart ? "icon cart-active" : "icon cart"}></li>
                        <li className={this.state.activeCart ? "text-active" : "text"}>购物车</li>
                    </ul>
                    <ul onClick={this.goPage.bind(this, "/mobile/mine")}>
                        <li className={this.state.activeMine ? "icon mine-active" : "icon mine"}></li>
                        <li className={this.state.activeMine ? "text-active" : "text"}>我的</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FooterComponent;