import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { getTopPick } from './DashboardAction';
import { OPERATORS_FETCH, UPDATE_OPERATORS, CREATE_OPERATORS, SAVE_OPERATORS } from './types';

export const getOperators = () => {
    return (dispatch) => {
        axios.get('http://localhost:9999/operators')
            .then(res => {
                dispatch({ type: OPERATORS_FETCH, payload: res.data })
            })
    }
}

export const updateOperator = ({ prop, value }) => {
    console.log("action prop => ", prop)
    console.log("action value => ", value)
    return {
        type: UPDATE_OPERATORS,
        payload: { prop, value }
    };
};

export const createOperator = (operator) => {
    return (dispatch) => {
        axios.post('http://localhost:9999/operator', operator)
            .then(res => {
                dispatch({ type: CREATE_OPERATORS, payload: res.data })
                dispatch(getOperators())
                Actions.operators();
            })
    };
};

export const editOperator = (id, operator) => {
    return (dispatch) => {
        axios.put('http://localhost:9999/operator/' + id, operator)
            .then(res => {
                dispatch({ type: SAVE_OPERATORS, payload: res.data })
                dispatch(getOperators())
                dispatch(getTopPick())
                Actions.operators();
            })
    };
};

export const deleteOperator = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:9999/operator/' + id)
            .then(() => {
                dispatch(getOperators())
                Actions.operators();
            })
    }
};