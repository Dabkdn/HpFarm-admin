import {
    LOGIN
} from "./actionType";
const INITIAL_STATE = {
    tokenInfo: {}
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            return {
                ...state,
                tokenInfo: payload
            }
        }
        default: return state;
    }
}