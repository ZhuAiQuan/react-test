/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-07 11:17:45
 * @LastEditTime: 2021-12-07 13:50:21
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { useState, useEffect, useRef } from 'react'
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function HookState() {
  /**
   * useState方法传入一个初始化参数 返回一个数组 解构第一个为状态 第二个为更新状态的方法
   * 更新状态的方法有两种 可以直接传入参数来改变状态
   * 也可以传入一个方法（参数为状态）返回参数来改变状态
   */
  /**
   * useEffect 相当于监听数据改变触发回调 相当于class组件里的3个生命周期 componentDidMount componentDidUpdate componentWillUmmount
   */
  /**
   * useRef 用法与class里的createRef相同
   */
  const [name, updateName] = useState('dingzong');
  const inputRef = useRef();
  function changeName() {
    // updateName((name) => '韦一敏')
    updateName(inputRef.current.state.value);
  }
  /**
   * 相当于监听name 一旦name发生改变 里面的回调就会触发；
   * 
   * useEffect第一个参数是一个函数 可以有return 当第二个参数传入的是空数组时 return一个方法 相当于模拟生命周期里的卸载函数
   * 第二个传入参数数组 数组可以传多个数据 监听多个数据 传空数组则只要有数据改变都会触发
   */
  useEffect(() => {
    console.log('name改变触发回调');
    
  }, [name])
  useEffect(() => {
    console.log('所有数据更改都会触发');
    return () => {
      console.log('卸载时触发')
    }
  }, [])
  return (
    <div>
      我的名字是：{name}
      
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} ref={inputRef} style={{ width: '100px' }} />
      <Button onClick={changeName}>修改名字</Button>
    </div>
  )
}
