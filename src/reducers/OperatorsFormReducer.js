import {
    UPDATE_OPERATORS,
    CREATE_OPERATORS,
    SAVE_OPERATORS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    armor: '',
    speed: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_OPERATORS:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CREATE_OPERATORS:
        case SAVE_OPERATORS:
            return INITIAL_STATE;
        default:
            return state;
    }
};