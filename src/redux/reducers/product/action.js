import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  GET_MY_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCT_BY_CATEGORY_ID
}
  from './actionType'

import {
  productAPI
}
  from 'api'

export const addProductAction = (payload) => ({
  type: ADD_PRODUCT,
  payload
})

export const getProductsAction = (payload) => ({
  type: GET_PRODUCTS,
  payload
})

export const getProductAction = (payload) => ({
  type: GET_PRODUCT,
  payload
})

export const getMyProductsAction = (payload) => ({
  type: GET_MY_PRODUCTS,
  payload
})

export const getProductsByCategoryIdAction = (payload) => ({
  type: GET_PRODUCT_BY_CATEGORY_ID,
  payload
})

export const addProduct = (data) => {

  return (dispatch) => {
    productAPI.addProductAPI(data)
      .then(res => {
        res.data && dispatch(addProductAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}

export const getProducts = () => {

  return (dispatch) => {
    productAPI.getProductsAPI()
      .then(res => {
        res.data && dispatch(getProductsAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}

export const getMyProducts = () => {

  return (dispatch) => {
    productAPI.getMyProductsAPI()
      .then(res => {
        res.data && dispatch(getMyProductsAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}

export const getProduct = (productId) => {

  return (dispatch) => {
    productAPI.getProductAPI(productId)
      .then(res => {
        res.data && dispatch(getProductAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}

export const getProductsByCategoryId = (categoryId) => {

  return (dispatch) => {
    productAPI.getProductsByCagegoryIdAPI(categoryId)
      .then(res => {
        res.data && dispatch(getProductsByCategoryIdAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}