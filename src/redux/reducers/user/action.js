import {
  ADD_USER,
  GET_ME,
  UPDATE_USER,
  GET_USERS,
  GET_USER
}
  from './actionType'

import {
  userAPI
}
  from 'api'

export const addUserAction = (payload) => ({
  type: ADD_USER,
  payload
})

export const getMeAction = (payload) => ({
  type: GET_ME,
  payload
})

export const updateUserAction = (payload) => ({
  type: UPDATE_USER,
  payload
})

export const getUsersAction = (payload) => ({
  type: GET_USERS,
  payload
})

export const getUserAction = (payload) => ({
  type: GET_USER,
  payload
})

export const addUser = (data, succ, err) => {

  return (dispatch) => {
    userAPI.addUserAPI(data)
      .then(res => {
        res.data && dispatch(addUserAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}

export const getMe = (succ, err) => {

  return (dispatch) => {
    userAPI.getMeAPI()
      .then(res => {
        res.data && dispatch(getMeAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}

export const getUser = (id, succ = ()=>{}, err = ()=>{}) => {

  return (dispatch) => {
    userAPI.getUserAPI(id)
      .then(res => {
        res.data && dispatch(getUserAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}

export const updateUser = (data, succ = ()=>{}, fail = ()=>{}) => {
  return (dispatch) => {
    userAPI.updateUserAPI(data)
      .then(res => {
        res.data && dispatch(updateUserAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        fail(error)
      })
  }
}


export const getUsers = (succ = ()=>{}, err = ()=>{}) => {

  return (dispatch) => {
    userAPI.getUsersAPI()
      .then(res => {
        res.data && dispatch(getUsersAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}