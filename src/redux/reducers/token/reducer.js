import {
    GET_TOKENS
} from "./actionType";
const INITIAL_STATE = {
    tokens: []
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case GET_TOKENS: {
            return {
                ...state,
                tokens: payload
            }
        }
        default: return state;
    }
}