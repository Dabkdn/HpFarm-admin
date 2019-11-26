import {
    ADD_CURRENCY_UNIT,
    GET_CURRENCY_UNITS,
    GET_CURRENCY_UNIT
} from "./actionType";
const INITIAL_STATE = {
    currencyUnit: {},
    currencyUnits: []
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ADD_CURRENCY_UNIT: {
            return {
                ...state,
                currencyUnit: payload
            }
        }
        case GET_CURRENCY_UNITS: {
            return {
                ...state,
                currencyUnits: payload
            }
        }
        case GET_CURRENCY_UNIT: {
            return {
                ...state,
                currencyUnit: payload
            }
        }
        default: return state;
    }
}