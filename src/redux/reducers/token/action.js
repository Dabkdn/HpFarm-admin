import {
  GET_TOKENS
}
  from './actionType'

import {
  tokenAPI
}
  from 'api'

export const getTokensAction = (payload) => ({
  type: GET_TOKENS,
  payload
})

export const getTokens = () => {
  return (dispatch) => {
    tokenAPI.getTokensAPI()
      .then(res => {
        res.data && dispatch(getTokensAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}
