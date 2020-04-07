import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                componentData: null
            }
        }
        async componentDidMount() {
            const { default: component } = await importComponent()
            //default 默认的属性，采用解构赋值，使用asyncComponent方法传递哪个组件 ，component就指的是哪个组件
            this.setState({
                componentData: component
            })
        }
        render() {
            const C = this.state.componentData
            return C ? <C {...this.props} /> : null
        }
    }
    return AsyncComponent
}