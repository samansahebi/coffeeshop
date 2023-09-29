import createReducer from '../createReducer';
import {
    GET_CHECKOUT,
    SET_CHECKOUT,
    GET_ORDER_LIST,
    SET_ORDER_LIST,
    SET_ERROR,
    ADD_TO_CHECKOUT,
    ADD_ITEM, GET_PACKAGE_TYPES, SET_PACKAGE_TYPES
} from './types';

const initialState = {
    loading: false,
    error:false,
    items: [],
    packages: [],
    orders: [],
    checkout: []
};

export default createReducer({
    [GET_CHECKOUT]: (state) => {
        return {...state, error: false, loading: true}
    },
    [SET_CHECKOUT]: (state, payload) => {
        return {...state, error: false, loading: false, checkout: payload.res}
    },
    [GET_PACKAGE_TYPES]: (state) => {
        return {...state, error: false, loading: true}
    },
    [SET_PACKAGE_TYPES]: (state, payload) => {
        return {...state, error: false, loading: false, packages: payload.res}
    },
    [ADD_TO_CHECKOUT]: (state, payload) => {
        return {...state, error: false, loading: false, checkout: state.checkout.push(payload.res)}
    },
    [ADD_ITEM]: (state, payload) => {
        return {...state, error: false, loading: false, items: [...state.items, payload.items]}
    },
    [GET_ORDER_LIST]: (state) => {
        return {...state, error: false, loading: true}
    },
    [SET_ORDER_LIST]: (state, payload) => {
        return {...state, error: false, loading: false, orders: payload.res}
    },
    [SET_ERROR]: (state) => {
        return {...state, loading: false, error: true}
    },
}, initialState);
