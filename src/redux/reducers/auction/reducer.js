import {
    ADD_AUCTION
} from "./actionType";
const INITIAL_STATE = {
    auction: {}
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ADD_AUCTION: {
            return {
                ...state,
                auction: payload
            }
        }
        default: return state;
    }
}