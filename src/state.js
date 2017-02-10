/**
 * Created by SG0226637 on 2/9/2017.
 */
import {createStore, applyMiddleware} from 'redux';
import promisesMiddleWare from './middlewares/promices';
import reducer from './reducers/index';

let createStoreWithMiddleware = applyMiddleware(
    promisesMiddleWare)(createStore);

const store = createStoreWithMiddleware(reducer, {
    gitUsers : [],
    query : '',
    counter : 0,
});

export default store;