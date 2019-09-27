import {TOP_PICK_OPERATOR_FETCH, TOP_BAN_OPERATOR_FETCH, TOP_ATK_OPERATOR_FETCH, TOP_DEF_OPERATOR_FETCH} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case TOP_PICK_OPERATOR_FETCH:
        case TOP_BAN_OPERATOR_FETCH:
        case TOP_ATK_OPERATOR_FETCH:
        case TOP_DEF_OPERATOR_FETCH:
            return action.payload;
        default:
            return state;
    }
};