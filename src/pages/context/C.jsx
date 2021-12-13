/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-07 14:20:27
 * @LastEditTime: 2021-12-07 15:42:12
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Component } from 'react'
import D from './D'
// import { Context } from './index'

export default class C extends Component {
  // static contextType = Context
  render() {
    return (
      <div className="pad grand">
        {/* 从A组件继承过来的名字是：{this.context.name} */}
        <D />
      </div>
    )
  }
}
