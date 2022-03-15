import request from '../../lib/axios'
import { FETCH_DETAIL, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_FAIL } from '../types'

const defaultParams = {
  url: '',
  detailType: '',
  id: ''
}

export const getDetail = (data = { ...defaultParams }) => {
  return (dispatch, state) => {
    dispatch(Detail())
    request({
      url: data?.url || `/${data.detailType}/${data.id}/`,
      method: 'GET'
    }).then((rsp) => {
      dispatch(DetailSuccess(rsp))
    }).catch((err) => {
      dispatch(DetailFail(err))
    })
  }
}

const Detail = () => {
  return {
    type: FETCH_DETAIL
  }
}

const DetailSuccess = (data) => {
  return {
    type: FETCH_DETAIL_SUCCESS,
    data: data
  }
}

const DetailFail = (error) => {
  return {
    type: FETCH_DETAIL_FAIL,
    error: error
  }
}
