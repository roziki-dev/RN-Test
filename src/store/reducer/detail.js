import {
  FETCH_DETAIL,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_FAIL
} from '../types'

const initialState = {
  data: [],
  loading: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL:
      return { ...state, loading: true }
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case FETCH_DETAIL_FAIL:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
