import {GET_TOKEN, SET_TOKEN, SET_ERROR, LOGOUT} from './types';
import {loginApi, logoutApi, refreshTokenApi} from "../../services/authorization";

export const loginAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_TOKEN});
        return loginApi(props).then(
            res => res?.status ? dispatch({type: SET_TOKEN, res}) : dispatch({type: SET_ERROR})
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
