import request from './request'

export const addCurrencyUnitAPI = (data) => {
    return request().post(`/api/unit`, data)
}

export const getCurrencyUnitsAPI = () => {
    return request().get(`/api/units`)
}

export const updateCurrencyUnitAPI = (data) => {
    return request().put(`/api/unit`, data)
}

export const getCurrencyUnitAPI = (id) => {
    return request().get(`/api/unit?id=${id}`)
}