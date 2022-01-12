import { NavLink, Route, Switch } from "react-router-dom";
import { Button } from "antd";
import "./App.css";
import React, { Component, lazy, Suspense } from "react";
import axios from 'axios'
// 使用Lazy懒加载组件 必须搭配Suspense suspense有一个fallback属性需要给它指定一个组件来显示加载中的视图
const Search = lazy(() => import("./components/search"));
// import Search from './components/search'
const List = lazy(() => import("./components/list"));
// import List from './components/list'
const Home = lazy(() => import("./pages/home"));
// import Home from './pages/home'
const About = lazy(() => import("./pages/about"));
// import About from './pages/about'
const HookState = lazy(() => import("./pages/hookState"));
const FragmentDom = lazy(() => import("./pages/fragment"));
const ContextDom = lazy(() => import("./pages/context"));
const Slots = lazy(() => import("./pages/slots"));
const HookReducer = lazy(() => import("./pages/hookReducer"));

export default class App extends Component {
  // state = {
  //   list: []
  // }
  // search = (keyword) => {
  //   axios.get(`/api/search/users?q=${keyword}`).then(
  //     res => {
  //       const { data: {items: list} } = res;
  //       this.setState({
  //         list
  //       })
  //     },
  //     err => console.log(err)
  //   )
  // }
  onRequest = () => {
    axios.post('/app/user/updateInfo').then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="App">
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Search></Search>
        </Suspense>

        <Button type="primary" shape="circle" onClick={this.onRequest}>
          A
        </Button>
        <Suspense fallback={<h1>LOADING...</h1>}>
          <List />
        </Suspense>

        <NavLink activeClassName="checked-link" to="/home">
          home
        </NavLink>
        <NavLink activeClassName="checked-link" to="/about">
          about
        </NavLink>
        <NavLink activeClassName="checked-link" to="/hookState">
          hookState
        </NavLink>
        <NavLink activeClassName="checked-link" to="/fragment">
          fragment
        </NavLink>
        <NavLink activeClassName="checked-link" to="/context">
          context
        </NavLink>
        <NavLink activeClassName="checked-link" to="/slots">
          slots
        </NavLink>
        <NavLink activeClassName="checked-link" to="/reducer">
          HookReducer
        </NavLink>
        <Switch>
          <Suspense fallback={<h1>LOADING...</h1>}>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/hookState" component={HookState}></Route>
            <Route exact path="/fragment" component={FragmentDom}></Route>
            <Route exact path="/context" component={ContextDom}></Route>
            <Route exact path="/slots" component={Slots}></Route>
            <Route exact path="/reducer" component={HookReducer}></Route>
          </Suspense>
        </Switch>
      </div>
    );
  }
}
