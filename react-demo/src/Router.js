//BrowserRouter  默认的路由模式，URL中没有#，也就是history
//HashRouter    路由的hash模式，URL中有#
//Switch        只要匹配到一个地址，就不在往下匹配
//Link          跳转页面，相当于vuejs中的 router-link
//NavLink       跳转页面，可以指定通过activeclassName指定css类，默认为active
//exact         严格匹配路由
//Redirect      路由重定向
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import asyncComponent from "./components/AsyncComponent"  //引入封装的按需加载组件的模块
const FooterComponent = asyncComponent(() => import("./components/Footer"))
class RouterComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Switch>
              <Route path={"/mobile"} component={FooterComponent}></Route>
              <Redirect to={"/mobile/home"}></Redirect>
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default RouterComponent;