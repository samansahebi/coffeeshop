import createReducer from '../createReducer';
import {GET_CHECKOUT, SET_CHECKOUT, SET_ERROR} from './types';

const initialState = {
    loading: false,
    error:false,
    orders: []
};

export default createReducer({
    [GET_CHECKOUT]: (state) => {
        return {...state,error: false, loading: true}
    },
    [SET_CHECKOUT]: (state, payload) => {
        return {...state,error: false, loading: false, orders: payload.res}
    },
    [SET_ERROR]: (state) => {
        return {...state, loading: false,error: true}
    },
}, initialState);
