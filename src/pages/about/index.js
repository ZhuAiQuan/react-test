/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-02 14:47:11
 * @LastEditTime: 2021-12-07 11:10:03
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Component } from 'react'
import { Button } from 'antd';

export default class About extends Component {
  state = {
    count: 0
  }
  onAdd = () => {
    // setState两个写法 
    const { count } = this.state
    // 对象式
    this.setState({
      count: count+1
    }, () => {
      console.log(this.state.count)
    })
    // 函数式 接收两个参数 一个为state 另一个为组件接收的参数Props
    // this.setState((state, props) => ({count: state.count+1}))
    // this.setState第二个为可选参数 是一个回调 由于setstate是异步执行的 等异步执行完毕会出发回调里的方法
  }
  render() {
    return (
      <div>
        当前数量为：{this.state.count}
        <Button type="primary" onClick={this.onAdd}>+1</Button>
      </div>
    )
  }
}
