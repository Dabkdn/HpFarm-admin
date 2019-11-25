import {
    GET_PARENT_CATEGORY_WITH_CHILDS,
    GET_CATEGORIES,
    ADD_CATEGORY
} from "./actionType";
const INITIAL_STATE = {
    parentCategories: [],
    categories: [],
    category: {}
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case GET_PARENT_CATEGORY_WITH_CHILDS: {
            return {
                ...state,
                parentCategories: payload
            }
        }
        case GET_CATEGORIES: {
            return {
                ...state,
                categories: payload
            }
        }
        case ADD_CATEGORY: {
            return {
                ...state,
                category: payload
            }
        }
        default: return state;
    }
}