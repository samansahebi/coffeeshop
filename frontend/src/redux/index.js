import { combineReducers } from 'redux';
import authentication from './authentication/reducer';
import shop from './shop/reducer';
import orders from './orders/reducer';

export default combineReducers({
    authentication, shop, orders
});
