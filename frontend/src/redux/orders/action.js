import {GET_CHECKOUT, SET_CHECKOUT, GET_ORDER_LIST, SET_ORDER_LIST, CREATE_ORDER, PAY_BILL, SET_ERROR} from './types';
import {getOrderListApi, getCheckoutApi} from "../../services/orders";

export const getCheckoutAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_CHECKOUT});
        return getCheckoutApi(props).then(
            res => res ? dispatch({type: SET_CHECKOUT, res}) : dispatch({type: SET_ERROR})
        );
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
