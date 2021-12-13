/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-06 09:21:16
 * @LastEditTime: 2021-12-07 09:23:14
 * @LastEditors: zaq
 * @Reference: 
 */
/**
 * 
 * @description reducer必须是一个纯函数！
 */
const testReducer = (preState = 0, actions) => {
  console.log(preState, actions);
  const { type, data } = actions;
  switch(type) {
    case 'increment':
      return preState + (+data)
    case 'decrement':
      return preState - (+data)
    default:
      return preState
  }
}

export default testReducer