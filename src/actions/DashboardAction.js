import axios from 'axios';
import {TOP_PICK_OPERATOR_FETCH, TOP_BAN_OPERATOR_FETCH, TOP_ATK_OPERATOR_FETCH, TOP_DEF_OPERATOR_FETCH} from './types';

export const getTopPick = () => {
    return (dispatch) => {
        axios.get('http://localhost:9999/top')
            .then(res => {
                dispatch({ type: TOP_PICK_OPERATOR_FETCH, payload: res.data })
            })
    }
}

export const getTopBan = () => {
    return (dispatch) => {
        axios.get('http://localhost:9999/ban')
            .then(res => {
                dispatch({ type: TOP_BAN_OPERATOR_FETCH, payload: res.data })
            })
    }
}

export const getTopATK = () => {
    return (dispatch) => {
        axios.get('http://localhost:9999/top/ATK')
            .then(res => {
                dispatch({ type: TOP_ATK_OPERATOR_FETCH, payload: res.data })
            })
    }
}

export const getTopDEF = () => {
    return (dispatch) => {
        axios.get('http://localhost:9999/top/DEF')
            .then(res => {
                dispatch({ type: TOP_DEF_OPERATOR_FETCH, payload: res.data })
            })
    }
}