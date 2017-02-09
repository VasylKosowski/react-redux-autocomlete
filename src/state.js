/**
 * Created by SG0226637 on 2/9/2017.
 */
import {createStore} from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer, {
    gitUsers : [],
    query : '',
    counter : 0
});

export default store;