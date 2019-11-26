import request from './request'

export const getParentCategoryWithChildAPI = () => {
    return request().get(`/api/category/parentwithchild`)
}

export const getCategoriesAPI = () => {
    return request().get(`/api/categories`)
}

export const addCategoryAPI = (data) => {
    return request().post(`/api/category`, data)
}

export const getCategoryAPI = (id) => {
    return request().get(`/api/category?id=${id}`)
}

export const updateCategoryAPI = (data) => {
    return request().put(`/api/category`, data)
}