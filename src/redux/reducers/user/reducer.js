import {
    ADD_USER,
    GET_ME,
    UPDATE_USER,
    GET_USERS,
    GET_USER
} from "./actionType";
const INITIAL_STATE = {
    user: {},
    me: {},
    users: []
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ADD_USER: {
            return {
                ...state,
                user: payload
            }
        }
        case GET_ME: {
            return {
                ...state,
                me: payload
            }
        }
        case UPDATE_USER: {
            return {
                ...state,
                user: payload
            }
        }
        case GET_USERS: {
            return {
                ...state,
                users: payload
            }
        }
        case GET_USER: {
            return {
                ...state,
                user: payload
            }
        }
        default: return state;
    }
}