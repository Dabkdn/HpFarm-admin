import request from './request'

export const getFaqsAPI = () => {
    return request().get(`/api/faqs`)
}

export const addFaqAPI = (data) => {
    return request().post(`/api/faq`, data)
}

export const updateFaqAPI = (data) => {
    return request().put(`/api/faq`, data)
}

export const getFaqAPI = (id) => {
    return request().get(`/api/faq?id=${id}`)
}