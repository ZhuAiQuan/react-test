/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-07 14:19:30
 * @LastEditTime: 2021-12-07 14:40:14
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Component, createContext } from 'react';
import B from './B'
import './index.css'

export const Context = createContext();
/**
 * context class类组件需要指定contextType 用法详见C组件
 */
const { Provider, Consumer } = Context;
/**
 * consumer适用于class组件和函数式组件 使用方式详见D组件
 */
export const Consumers = Consumer;

export default class ContextDom extends Component {
  state = {
    name: 'dz',
    age: 18
  }
  render() {
    return (
      <div className="ctx pad">
        父级组件A 我的名字是：{this.state.name}
        <Provider value={{...this.state}}>
          <B />
        </Provider>
        
      </div>
    )
  }
}
