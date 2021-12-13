/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-06 14:16:39
 * @LastEditTime: 2021-12-06 16:50:40
 * @LastEditors: zaq
 * @Reference: 
 */
import Count from '../../components/count';
import { connect } from 'react-redux';
import { createIncrement, createDecrement, createIncrementAsync } from '../../store/actions'

export default connect(
  state => ({ count: state.test }),
  {
    add: createIncrement,
    jian: createDecrement,
    asyncAdd: createIncrementAsync
  }
)(Count)