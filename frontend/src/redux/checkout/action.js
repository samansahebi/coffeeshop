import {GET_CHECKOUT, CREATE_ORDER, PAY_BILL} from './types';
import {loginApi, logoutApi, refreshTokenApi} from "../../services/authorization";

export const getCheckout = (props) => {
    return (dispatch) => {
        dispatch({type: GET_CHECKOUT});
        return loginApi(props).then(
            res => res?.status ? dispatch({type: SET_CHECKOUT, res}) : dispatch({type: SET_ERROR})
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
