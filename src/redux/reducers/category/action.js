import {
  GET_PARENT_CATEGORY_WITH_CHILDS,
  GET_CATEGORIES
}
  from './actionType'

import {
  categoryAPI
}
  from 'api'

export const getParentCategoryWithChildAction = (payload) => ({
  type: GET_PARENT_CATEGORY_WITH_CHILDS,
  payload
})

export const getCategoriesAction = (payload) => ({
  type: GET_CATEGORIES,
  payload
})

export const getParentCategoryWithChild = () => {

  return (dispatch) => {
    categoryAPI.getParentCategoryWithChildAPI()
      .then(res => {
        res.data && dispatch(getParentCategoryWithChildAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}

export const getCategories = () => {

  return (dispatch) => {
    categoryAPI.getCategoriesAPI()
      .then(res => {
        res.data && dispatch(getCategoriesAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}