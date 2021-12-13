/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-07 14:20:44
 * @LastEditTime: 2021-12-07 14:41:41
 * @LastEditors: zaq
 * @Reference: 
 */
import React from 'react'
import { Consumers } from './index'

export default function D() {
  return (
    <div className="pad last">
      <Consumers>
        {
          value => `从A组件接收的值 名字是：${value.name}`
        }
      </Consumers>
    </div>
  )
}
