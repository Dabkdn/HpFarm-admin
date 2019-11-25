import request from './request'

export const getFaqsAPI = () => {
    return request().get(`/api/faqs`)
}