import {
    GET_FAQs,
    GET_FAQ
} from "./actionType";
const INITIAL_STATE = {
    faqs: [],
    faq: {}
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case GET_FAQs: {
            return {
                ...state,
                faqs: payload
            }
        }
        case GET_FAQ: {
            return {
                ...state,
                faq: payload
            }
        }
        default: return state;
    }
}