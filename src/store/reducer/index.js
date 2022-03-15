import { combineReducers } from 'redux'

import CategoryList from './category'
import Detail from './detail'

export default combineReducers({
  categoryList: CategoryList,
  detail: Detail
})
