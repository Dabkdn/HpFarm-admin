import request from './request'

export const getCountsAPI = () => {
    return request().get(`/api/counts`)
}