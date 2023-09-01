import createReducer from '../createReducer';
import {
    GET_PRODUCT_LIST,
    SET_PRODUCT_LIST,
    GET_CATEGORY_LIST,
    SET_CATEGORY_LIST,
    SET_ERROR,
    GET_PRODUCT, SET_PRODUCT
} from './types';

const initialState = {
    loading: false,
    error:false,
    data: [],
    product: {},
    categories: []
};

export default createReducer({
    [GET_PRODUCT_LIST]: (state) => {
        return {...state,error: false, loading: true}
    },
    [SET_PRODUCT_LIST]: (state, payload) => {
        return {error: false, loading: false, data: payload.res}
    },
    [GET_PRODUCT]: (state) => {
        return {...state,error: false, loading: true}
    },
    [SET_PRODUCT]: (state, payload) => {
        return {error: false, loading: false, product: payload.res}
    },
    [GET_CATEGORY_LIST]: (state) => {
        return {...state,error: false, loading: true}
    },
    [SET_CATEGORY_LIST]: (state, payload) => {
        return {error: false, loading: false, categories: payload.res}
    },
    [SET_ERROR]: (state) => {
        return {...state, loading: false,error: true}
    },
}, initialState);
