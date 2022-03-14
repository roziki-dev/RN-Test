import request from '../../lib/axios'
import { FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL } from '../types'
// import {  } from "module";

const defaultParams = {
  category: '',
  page: 1,
  limit: 10,
  sort: '-createdAt',
  search: ''
}

export const getCategory = (data = { ...defaultParams }) => {
  return (dispatch, state) => {
    dispatch(Category())
    console.log(data.category)
    request({
      url: `/${data.category}/`,
      method: 'GET'
    }).then((rsp) => {
      // console.log(JSON.stringify(rsp.data))
      dispatch(CategorySuccess(rsp.data))
    }).catch((err) => {
      console.log(err)
      dispatch(CategoryFail(err))
    })
  }
}

const Category = () => {
  return {
    type: FETCH_CATEGORIES
  }
}

const CategorySuccess = (data) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    data: data
  }
}

const CategoryFail = (error) => {
  return {
    type: FETCH_CATEGORIES_FAIL,
    error: error
  }
}
