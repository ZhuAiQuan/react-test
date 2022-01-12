/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-07 14:20:27
 * @LastEditTime: 2021-12-21 16:34:51
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Component, useContext } from 'react'
import D from './D'
import { Context } from './index'

// export default class C extends Component {
//   static contextType = Context
//   render() {
//     return (
//       <div className="pad grand">
//         从A组件继承过来的名字是：{this.context.name}
//         <D />
//       </div>
//     )
//   }
// }

export default function C() {
  const { name, age } = useContext(Context);
  return (
    <div className="pad grand">
        从A组件继承过来的名字是：{name}
        从A组件继承过来的年龄是：{age}
        <D />
      </div>
  )
}