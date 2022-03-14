import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL
} from '../types'

const initialState = {
  data: [],
  count: 10,
  loading: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, loading: true }
    case FETCH_CATEGORIES_SUCCESS:
      // console.log(action.data)
      return {
        ...state,
        data: action.data.results,
        count: action.data.count,
        loading: false
      }
    case FETCH_CATEGORIES_FAIL:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
