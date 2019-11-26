import {
  GET_FAQs,
  ADD_FAQ,
  UPDATE_FAQ,
  GET_FAQ
}
  from './actionType'

import {
  faqAPI
}
  from 'api'

export const getFaqsAction = (payload) => ({
  type: GET_FAQs,
  payload
})

export const getFaqAction = (payload) => ({
  type: GET_FAQ,
  payload
})

export const updateFaqAction = (payload) => ({
  type: UPDATE_FAQ,
  payload
})

export const addFaqAction = (payload) => ({
  type: ADD_FAQ,
  payload
})

export const getFaqs = () => {
  return (dispatch) => {
    faqAPI.getFaqsAPI()
      .then(res => {
        res.data && dispatch(getFaqsAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}

export const getFaq = (id) => {
  return (dispatch) => {
    faqAPI.getFaqAPI(id)
      .then(res => {
        res.data && dispatch(getFaqAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}

export const addFaq = (data, succ = () => { }, err = () => { }) => {
  return (dispatch) => {
    faqAPI.addFaqAPI(data)
      .then(res => {
        res.data && dispatch(addFaqAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}

export const updateFaq = (data, succ = () => { }, err = () => { }) => {
  return (dispatch) => {
    faqAPI.updateFaqAPI(data)
      .then(res => {
        res.data && dispatch(updateFaqAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}