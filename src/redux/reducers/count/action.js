import {
GET_COUNTS
}
from './actionType'

import {
countAPI
}
from 'api'

export const getCountsAction = (payload) => ({
    type: GET_COUNTS,
    payload
  })

export const getCounts = () => {
  
    return (dispatch) => {
        countAPI.getCountsAPI()
          .then(res => {
            res.data && dispatch(getCountsAction(res.data))
          })
          .catch(error => {
            console.log("Error  ", error);
          })
      }
}