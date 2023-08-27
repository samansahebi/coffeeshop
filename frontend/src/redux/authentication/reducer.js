import createReducer from '../createReducer';
import {LOGIN, SET_TOKEN, SET_ERROR, GET_TOKEN, SEND_OTP, GET_PROFILE} from './types';

const initialState = {
    access: '',
    refresh: '',
    loading: false,
    error:false
};

export default createReducer({
    [GET_TOKEN]: (state) => {
        return {...state,error: false, loading: true}
    },
    [SET_TOKEN]: (state, payload) => {
        return {...state,error: false, loading: false, ...payload.res}
    },
    [SEND_OTP]: (state, payload) => {
        return {...state,error: false, loading: false, ...payload.res}
    },
    [GET_PROFILE]: (state, payload) => {
        return {...state,error: false, loading: false, ...payload.res}
    },
    [SET_ERROR]: (state) => {
        return {...state, loading: false,error: true}
    },
    [LOGIN]: (state, {token, refresh, remember}) => {
        return {...state, token, refresh, setStore: true, remember}
    },
}, initialState);
