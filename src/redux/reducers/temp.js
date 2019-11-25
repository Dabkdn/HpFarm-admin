import { TOGGLE_TEMP } from '../actionTypes'

const initState = {
    isTemp: true
}

export default (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_TEMP:
            return {
                ...state,
                isTemp: !state.isTemp
            };
        default:
            return state;
    }
}