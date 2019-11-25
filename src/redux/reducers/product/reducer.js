import {
    ADD_PRODUCT,
    GET_PRODUCTS,
    GET_MY_PRODUCTS,
    GET_PRODUCT,
    GET_PRODUCT_BY_CATEGORY_ID
} from "./actionType";
const INITIAL_STATE = {
    product: {},
    products: [],
    myProducts: []
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                product: payload
            }
        }
        case GET_PRODUCTS: {
            return {
                ...state,
                products: payload
            }
        }
        case GET_MY_PRODUCTS: {
            return {
                ...state,
                myProducts: payload
            }
        }
        case GET_PRODUCT: {
            return {
                ...state,
                product: payload
            }
        }
        case GET_PRODUCT_BY_CATEGORY_ID: {
            return {
                ...state,
                products: payload
            }
        }
        default: return state;
    }
}