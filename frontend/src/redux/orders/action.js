import {GET_CHECKOUT, SET_CHECKOUT, CREATE_ORDER, PAY_BILL, SET_ERROR} from './types';
import {getOrderListApi} from "../../services/orders";

export const getOrderListAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_CHECKOUT});
        return getOrderListApi(props).then(
            res => res ? dispatch({type: SET_CHECKOUT, res}) : dispatch({type: SET_ERROR})
        );
    }
};
