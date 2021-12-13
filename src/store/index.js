/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-06 09:08:22
 * @LastEditTime: 2021-12-06 16:49:53
 * @LastEditors: zaq
 * @Reference: 
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import testReducer from './reducer'
import personReducer from './person_reducer'
// 用于支持异步actions
import thunk from 'redux-thunk'

const store = createStore(combineReducers({
  test: testReducer,
  person: personReducer
}), applyMiddleware(thunk));

export default store