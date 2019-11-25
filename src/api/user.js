import request from './request'

export const addUserAPI = (data) => {
    return request().post(`/api/user`, data)
}

export const getMeAPI = () => {
    return request().get(`/api/user/me`)
}

export const updateUserAPI = (data) => {
    return request().put(`/api/user`, data)
}