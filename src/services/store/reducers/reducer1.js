import {
    ACTION_1
} from '../actions/actionTypes';

const initialState = {
    state1: []
};
// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_1 : {
            return {
                ...state,
                state1: payload
            };
        }
        default:
            return state;
    }
};
