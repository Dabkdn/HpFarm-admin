import {
  ADD_AUCTION
}
  from './actionType'

import {
  auctionAPI
}
  from 'api'

export const addAuctionAction = (payload) => ({
  type: ADD_AUCTION,
  payload
})

export const addAuction = (data, succ, err) => {

  return (dispatch) => {
    auctionAPI.addAuctionAPI(data)
      .then(res => {
        res.data && dispatch(addAuctionAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}