import request from './request'

export const addCurrencyUnitAPI = (data) => {
    return request().post(`/api/unit`, data)
}

export const getCurrencyUnitsAPI = () => {
    return request().get(`/api/units`)
}