import {GET_PRODUCT_LIST, SET_PRODUCT_LIST, SET_ERROR} from './types';
import {getProductListApi} from "../../services/shop";

export const getProductListAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_PRODUCT_LIST});
        return getProductListApi(props).then(
            res => res ? dispatch({type: SET_PRODUCT_LIST, res}) : dispatch({type: SET_ERROR})
        );
    }
};
