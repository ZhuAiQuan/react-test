/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-07 13:56:44
 * @LastEditTime: 2021-12-07 14:01:48
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Fragment } from 'react'

export default function FragmentDom() {
  return (
    <Fragment>
      <h1>fragment 文档碎片 只有在for循环渲染的时候比较有用 可以传一个key值 平常可以直接使用空标签
        <>
          <span>oooops!(空标签不允许传入参数的哦 注意)</span>
        </>
      来包裹</h1>
    </Fragment>
  )
}
