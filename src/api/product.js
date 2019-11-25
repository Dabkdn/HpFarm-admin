import request from './request'

export const addProductAPI = (data) => {
    return request().post(`/api/product`, data)
}

export const getProductsAPI = () => {
    return request().get(`/api/products`)
}

export const getUserProductsAPI = (userId) => {
    return request().get(`/api/products/user/${userId}`)
}

export const getMyProductsAPI = () => {
    return request().get(`/api/myproducts`)
}

export const getProductAPI = (productId) => {
    return request().get(`/api/product?id=${productId}`)
}

export const getProductsByCagegoryIdAPI = (categoryId) => {
    return request().get(`/api/products/category/${categoryId}`)
}