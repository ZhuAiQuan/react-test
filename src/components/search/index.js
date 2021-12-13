/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-01 15:58:30
 * @LastEditTime: 2021-12-02 13:23:41
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios'
import './search.css'

export default class Search extends Component {
  onSearch = () => {
    const {inputRef: { value: keyword }} = this
    if (keyword) {
      // this.props.search(keyword)
      axios.get(`/api/search/users?q=${keyword}`).then(
        res => {
          const { data: {items: list} } = res;
          // this.setState({
          //   list
          // })
          PubSub.publish('seedData', list)
        },
        err => console.log(err)
      )
    }
  }
  render() {
    return (
      <div className="search-ctx">
        <input ref={ el => this.inputRef = el  } />
        <button onClick={ this.onSearch }>搜索</button>
      </div>
    )
  }
}
