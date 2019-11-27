import request from './request'

export const getTokensAPI = () => {
    return request().get(`/api/tokens`)
}