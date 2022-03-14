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
      const arr = []
      console.log(rsp.data.count)
      if (rsp.data.results.length > 0) {
        for (let index = 0; index < rsp.data.results.length; index++) {
          arr.push({
            ...rsp.data.results[index],
            imgPath: `asset:/${data.category}/${index + 1}.jpg`
          })
        }
      }
      dispatch(CategorySuccess({ ...rsp.data, results: arr }))
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
