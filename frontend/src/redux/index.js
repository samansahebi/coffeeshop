import { combineReducers } from 'redux';
import authentication from './authentication/reducer';
import shop from './shop/reducer';

export default combineReducers({
    authentication, shop
});
