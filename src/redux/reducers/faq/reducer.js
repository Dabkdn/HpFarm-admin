import {
    GET_FAQ
} from "./actionType";
const INITIAL_STATE = {
    faqs: []
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case GET_FAQ: {
            return {
                ...state,
                faqs: payload
            }
        }
        default: return state;
    }
}