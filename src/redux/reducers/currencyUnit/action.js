import {
  ADD_CURRENCY_UNIT,
  GET_CURRENCY_UNITS,
  UPDATE_CURRENCY_UNIT,
  GET_CURRENCY_UNIT
}
  from './actionType'

import {
  currencyUnitAPI
}
  from 'api'

export const addCurrencyUnitAction = (payload) => ({
  type: ADD_CURRENCY_UNIT,
  payload
})

export const getCurrencyUnitsAction = (payload) => ({
  type: GET_CURRENCY_UNITS,
  payload
})

export const updateCurrencyUnitAction = (payload) => ({
  type: UPDATE_CURRENCY_UNIT,
  payload
})

export const getCurrencyUnitAction = (payload) => ({
  type: GET_CURRENCY_UNIT,
  payload
})

export const addCurrencyUnit = (data, succ = () => { }, err = () => { }) => {

  return (dispatch) => {
    currencyUnitAPI.addCurrencyUnitAPI(data)
      .then(res => {
        res.data && dispatch(addCurrencyUnitAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}

export const getCurrencyUnits = () => {

  return (dispatch) => {
    currencyUnitAPI.getCurrencyUnitsAPI()
      .then(res => {
        res.data && dispatch(getCurrencyUnitsAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}

export const updateCurrencyUnit = (data, succ = () => { }, err = () => { }) => {
  return (dispatch) => {
    currencyUnitAPI.updateCurrencyUnitAPI(data)
      .then(res => {
        res.data && dispatch(updateCurrencyUnitAction(res.data))
        succ(res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        err(error)
      })
  }
}

export const getCurrencyUnit = (id) => {
  return (dispatch) => {
    currencyUnitAPI.getCurrencyUnitAPI(id)
      .then(res => {
        res.data && dispatch(getCurrencyUnitAction(res.data))
      })
      .catch(error => {
        console.log("Error  ", error);
      })
  }
}