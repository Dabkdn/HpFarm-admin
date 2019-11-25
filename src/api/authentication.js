import request from './request'

export const loginAPI = (data) => {
    return request().post(`/api/login`, data)
}