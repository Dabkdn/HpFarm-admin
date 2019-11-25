import {
LOGIN
}
from './actionType'

import {
  authenticationAPI
}
from 'api'

export const loginAction = (payload) => ({
    type: LOGIN,
    payload
  })

export const login = (data, callback) => {
  
    return (dispatch) => {
      authenticationAPI.loginAPI(data)
          .then(res => {
            res.data && dispatch(loginAction(res.data))
            callback(null, res.data)
          })
          .catch(error => {
            console.log(error);
            callback(error, null)
          })
      }
}