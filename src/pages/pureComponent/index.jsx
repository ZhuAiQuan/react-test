/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-07 15:08:21
 * @LastEditTime: 2021-12-07 15:14:10
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { PureComponent } from 'react'

// 使用PureComponent来优化组件
/**
 * 当子组件没有使用父组件的状态 但父组件setState触发了更新 子组件也会更新 使用pureComponent会优化子组件让其不会再次render
 */
export default class Pure extends PureComponent {
  render() {
    return (
      <div>
        <Child />
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}