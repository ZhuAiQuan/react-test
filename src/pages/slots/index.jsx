/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-07 15:35:27
 * @LastEditTime: 2021-12-07 15:43:03
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Component } from 'react'
/**
 * 类似于vue中的slot插槽用法 动态灵活的传入组件
 */

export default class Slots extends Component {
  render() {
    return (
      <div>
        <A render={(name) => <B name={name} />} />
      </div>
    )
  }
}

class A extends Component {
  state = {
    name: 'abc name '
  }
  render() {
    return (
      <div>
        A组件
        {this.props.render(this.state.name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div>
        从A接收的名字是{this.props.name}
      </div>
    )
  }
}