import request from './request'

export const getParentCategoryWithChildAPI = () => {
    return request().get(`/api/category/parentwithchild`)
}

export const getCategoriesAPI = () => {
    return request().get(`/api/categories`)
}