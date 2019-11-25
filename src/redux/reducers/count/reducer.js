import {
    GET_COUNTS
} from "./actionType";
const INITIAL_STATE = {
    counts: []
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case GET_COUNTS: {
            return {
                ...state,
                counts: payload
            }
        }
        default: return state;
    }
}