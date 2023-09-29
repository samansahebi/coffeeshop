import {
    GET_PRODUCT_LIST,
    SET_PRODUCT_LIST,
    GET_CATEGORY_LIST,
    SET_CATEGORY_LIST,
    SET_ERROR,
    SET_PRODUCT, GET_PRODUCT,
    GET_PRODUCT_UNIT_LIST,
    SET_PRODUCT_UNIT_LIST
} from './types';
import {getProductListApi, getCategoryListApi, getProductApi, getProductUnitListApi} from "../../services/shop";

export const getProductListAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_PRODUCT_LIST});
        return getProductListApi(props).then(
            res => res ? dispatch({type: SET_PRODUCT_LIST, res}) : dispatch({type: SET_ERROR})
        );
    }
};

export const getProductUnitListAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_PRODUCT_UNIT_LIST});
        return getProductUnitListApi(props).then(
            res => res ? dispatch({type: SET_PRODUCT_UNIT_LIST, res}) : dispatch({type: SET_ERROR})
        );
    }
};

export const getProductAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_PRODUCT});
        return getProductApi(props).then(
            res => res ? dispatch({type: SET_PRODUCT, res}) : dispatch({type: SET_ERROR})
        );
    }
};

export const getCategoryListAction = (props) => {
    return (dispatch) => {
        dispatch({type: GET_CATEGORY_LIST});
        return getCategoryListApi(props).then(
            res => res ? dispatch({type: SET_CATEGORY_LIST, res}) : dispatch({type: SET_ERROR})
        );
    }
};
