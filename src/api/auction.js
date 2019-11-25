import request from './request'

export const addAuctionAPI = (data) => {
    return request().post(`/api/auction`, data)
}