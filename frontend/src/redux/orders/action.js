import {
    GET_CHECKOUT,
    SET_CHECKOUT,
    GET_ORDER_LIST,
    SET_ORDER_LIST,
    CREATE_ORDER,
    PAY_BILL,
    SET_ERROR,
    ADD_TO_CHECKOUT, ADD_ITEM, GET_PACKAGE_TYPES, SET_PACKAGE_TYPES
} from './types';
import {getOrderListApi, getCheckoutApi, addToCheckoutApi, getPackageTypesApi} from "../../services/orders";

export const getCheckoutAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_CHECKOUT});
        return getCheckoutApi(props).then(
            res => res ? dispatch({type: SET_CHECKOUT, res}) : dispatch({type: SET_ERROR})
        );
    }
};

export const getPackageTypesAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_PACKAGE_TYPES});
        return getPackageTypesApi(props).then(
            res => res ? dispatch({type: SET_PACKAGE_TYPES, res}) : dispatch({type: SET_ERROR})
        );
    }
};

export const addToCheckoutAction = (props) => {
    return (dispatch) => {
        return addToCheckoutApi(props).then(
            res => res ? dispatch({type: ADD_TO_CHECKOUT, res}) : dispatch({type: SET_ERROR})
        );
    }
};

export const addItemAction = (items) => {
    return (dispatch) => {
            dispatch({type: ADD_ITEM, items})
    }
};

export const getOrderListAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_ORDER_LIST});
        return getOrderListApi(props).then(
            res => res ? dispatch({type: SET_ORDER_LIST, res}) : dispatch({type: SET_ERROR})
        );
    }
};
