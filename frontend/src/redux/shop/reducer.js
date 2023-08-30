import createReducer from '../createReducer';
import {GET_PRODUCT_LIST, SET_PRODUCT_LIST, SET_ERROR} from './types';

const initialState = {
    loading: false,
    error:false,
    data: []
};

export default createReducer({
    [GET_PRODUCT_LIST]: (state) => {
        return {...state,error: false, loading: true}
    },
    [SET_PRODUCT_LIST]: (state, payload) => {
        return {error: false, loading: false, data: payload.res}
    },
    [SET_ERROR]: (state) => {
        return {...state, loading: false,error: true}
    },
}, initialState);
