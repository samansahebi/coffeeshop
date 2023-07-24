import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './index';

const middleware = () => {
    const middlewareList = [thunk];
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        middlewareList.push(logger);
    }
    return middlewareList;
};

const store = createStore(
    reducers,
    { ...JSON.parse(localStorage.getItem('coffeeshop-store')) },
    applyMiddleware(...middleware()),
);

store.subscribe((e) => {
    const states = {};
    Object.keys(store.getState()).map((key)=>{
        if(store.getState()[key]['setStore'] !== false){
            states[key] = store.getState()[key]
        }
        return null;
    });
    localStorage.setItem('coffeeshop-store', JSON.stringify(states));
});

export default store;
