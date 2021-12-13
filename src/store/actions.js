/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-06 09:52:26
 * @LastEditTime: 2021-12-06 10:16:14
 * @LastEditors: zaq
 * @Reference: 
 */

// 同步
export const createIncrement = data => ({ type: 'increment', data })
export const createDecrement = data => ({ type: 'decrement', data })
// 异步
export const createIncrementAsync = data => dispatch => {
  setTimeout(() => {
    dispatch(createIncrement(data))
  }, 500);
}