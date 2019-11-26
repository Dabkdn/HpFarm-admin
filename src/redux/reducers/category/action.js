import {
  GET_PARENT_CATEGORY_WITH_CHILDS,
  GET_CATEGORIES,
  ADD_CATEGORY,
  GET_CATEGORY,
  UPDATE_CATEGORY
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

export const addCategoryAction = (payload) => ({
  type: ADD_CATEGORY,
  payload
})

export const getCategoryAction = (payload) => ({
  type: GET_CATEGORY,
  payload
})

export const updateCategoryAction = (payload) => ({
  type: UPDATE_CATEGORY,
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

export const addCategory = (data, succ = () => {}, err = () => {}) => {
  return (dispatch) => {
    categoryAPI.addCategoryAPI(data)
      .then(res => {
        res.data && dispatch(addCategoryAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}

export const getCategory = (id, succ = () => {}, err = () => {}) => {
  return (dispatch) => {
    categoryAPI.getCategoryAPI(id)
      .then(res => {
        res.data && dispatch(getCategoryAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}

export const updateCategory = (data, succ = () => {}, err = () => {}) => {
  return (dispatch) => {
    categoryAPI.updateCategoryAPI(data)
      .then(res => {
        res.data && dispatch(updateCategoryAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}