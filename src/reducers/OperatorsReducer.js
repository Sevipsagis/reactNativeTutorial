import {OPERATORS_FETCH} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case OPERATORS_FETCH:
            return action.payload;
        default:
            return state;
    }
};