/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-06 14:13:55
 * @LastEditTime: 2021-12-06 15:23:31
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Component } from 'react'
import { Input, Button } from 'antd';
// import store from '../../store';
// import { createDecrement, createIncrement, createIncrementAsync } from '../../store/actions'

export default class Count extends Component {
  state = {
    value: 0
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  increment = () => {
    this.props.add(+this.state.value)
    // store.dispatch(createIncrement(this.state.value))
  }
  decrement = () => {
    this.props.jian(+this.state.value)
    // store.dispatch(createDecrement(this.state.value))
  }
  incrementAsync = () => {
    this.props.asyncAdd(+this.state.value)
    // store.dispatch(createIncrementAsync(this.state.value))
  }
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  render() {
    return (
      <div>
        <Input value={this.state.value} onChange={this.onChange} style={{ width: '100px' }} />
        <Button onClick={this.increment}>+加</Button>
        <Button onClick={this.decrement}>-减</Button>
        <Button onClick={this.incrementAsync}>异步+</Button>
        <div>当前值为{this.props.count}</div>
      </div>
    )
  }
}
