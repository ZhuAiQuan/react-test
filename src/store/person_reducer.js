/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-06 16:45:33
 * @LastEditTime: 2021-12-06 16:48:55
 * @LastEditors: zaq
 * @Reference: 
 */
const initState = 0
const personReducer = (preState = initState, actions) => {
  const { type, data } = actions;
  switch(type) {
    case 'add':
      return preState + data
    default:
      return preState
  }
}
export default personReducer