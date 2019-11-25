import {
  ADD_CURRENCY_UNIT,
  GET_CURRENCY_UNITS
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

export const addCurrencyUnit = (data, callback) => {

  return (dispatch) => {
    currencyUnitAPI.addCurrencyUnitAPI(data)
      .then(res => {
        res.data && dispatch(addCurrencyUnitAction(res.data))
        callback(null, res.data)
      })
      .catch(error => {
        console.log("Error  ", error);
        callback(error, null)
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