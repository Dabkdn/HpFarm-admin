import {
GET_FAQ
}
from './actionType'

import {
faqAPI
}
from 'api'

export const getFaqAction = (payload) => ({
    type: GET_FAQ,
    payload
  })

export const getFaqs = () => {
  
    return (dispatch) => {
        faqAPI.getFaqsAPI()
          .then(res => {
            res.data && dispatch(getFaqAction(res.data))
          })
          .catch(error => {
            console.log("Error  ", error);
          })
      }
}