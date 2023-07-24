import createReducer from '../createReducer';
import {LOGIN, SET_TOKEN, SET_ERROR, GET_TOKEN} from './types';

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
        return {...state,error: false, loading: false, ...payload.res.data}
    },
    [SET_ERROR]: (state) => {
        return {...state, loading: false,error: true}
    },
    [LOGIN]: (state, {token, refresh, remember}) => {
        return {...state, token, refresh, setStore: true, remember}
    },
}, initialState);
