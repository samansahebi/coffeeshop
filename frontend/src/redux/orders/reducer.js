import createReducer from '../createReducer';
import {GET_CHECKOUT, SET_CHECKOUT, GET_ORDER_LIST, SET_ORDER_LIST, SET_ERROR} from './types';

const initialState = {
    loading: false,
    error:false,
    orders: [],
    checkout: []
};

export default createReducer({
    [GET_CHECKOUT]: (state) => {
        return {...state,error: false, loading: true}
    },
    [SET_CHECKOUT]: (state, payload) => {
        return {...state,error: false, loading: false, checkout: payload.res}
    },
    [GET_ORDER_LIST]: (state) => {
        return {...state,error: false, loading: true}
    },
    [SET_ORDER_LIST]: (state, payload) => {
        return {...state,error: false, loading: false, orders: payload.res}
    },
    [SET_ERROR]: (state) => {
        return {...state, loading: false,error: true}
    },
}, initialState);
