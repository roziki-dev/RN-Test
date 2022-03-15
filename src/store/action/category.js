import request from '../../lib/axios'
import { FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL } from '../types'

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
    request({
      url: `${data.category}/`,
      method: 'GET'
    }).then((rsp) => {
      const arr = []
      // console.log(rsp)
      if (rsp.results.length > 0) {
        let indx = 0
        for (const item of rsp.results) {
          let url = ''
          let str = ''
          switch (data.category) {
            case 'starships':
              str = item.url
              str = str.split('/')
              // console.log(str[str.length - 2])
              url = `asset:/${data.category}/${str[str.length - 2]}.jpg`
              break
            default:
              url = `asset:/${data.category}/${indx + 1}.jpg`
              break
          }
          const obj = {
            ...item,
            imgPath: url
          }
          arr.push(obj)
          indx++
        }
      }
      dispatch(CategorySuccess({ ...rsp, results: arr }))
    }).catch((err) => {
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
