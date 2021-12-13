/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-01 16:05:52
 * @LastEditTime: 2021-12-02 13:23:34
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './list.css'

export default class List extends Component {
  state = {
    data: []
  }
  toGithub = (url) => {
    return () => {
      window.open(url)
    }
  }
  componentDidMount() {
    this.requestData = PubSub.subscribe('seedData', (msg, data) => {
      console.log(msg, data)
      this.setState({
        data
      })
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.requestData)
  }
  render() {
    const { data } = this.state;
    return (
      <div className="list-ctx">
        {
          data.map(item => (
            <div className="item" key={item.id} onClick={this.toGithub(item.html_url)}>
              <img alt="avatar" src={ item.avatar_url } className="avatar" />
              <div>{ item.login }</div>
            </div>
          ))
        }
      </div>
    )
  }
}
