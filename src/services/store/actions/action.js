import {
    ACTION_1
} from './actionTypes';

/* dispatches action to set the Course data array */
export const setAction = (data) => ({
    type: ACTION_1,
    payload: data
});
