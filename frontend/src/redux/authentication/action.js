import {GET_TOKEN, SET_TOKEN, SET_ERROR, LOGOUT, SEND_OTP, GET_PROFILE} from './types';
import {loginApi, logoutApi, refreshTokenApi, sendOtpApi, getProfileApi} from "../../services/authorization";

export const getProfileAction = (props) => {
    return (dispatch) => {
        return getProfileApi(props).then(
            res => res ? dispatch({type: GET_PROFILE, res}) : dispatch({type: SET_ERROR})
        );
    }
};

export const sendOtpAction = (props) => {
    return (dispatch) => {
        return sendOtpApi(props).then(
            res => res?.detail ? dispatch({type: SEND_OTP, res}) : dispatch({type: SET_ERROR})
        );
    }
};

export const loginAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_TOKEN});
        return loginApi(props).then(
            res => res?.access ? dispatch({type: SET_TOKEN, res}) : dispatch({type: SET_ERROR})
        );
    }
};

export const refreshTokenAction = (res) => {
    return (dispatch) => {
        dispatch({type: SET_TOKEN, res})
    }
};

export function logoutAction(props) {
    return (dispatch) => {
        return logoutApi(props).then(
            res => res?.status ? dispatch({type: LOGOUT, res}) : dispatch({type: SET_ERROR})
        );
    };
}
