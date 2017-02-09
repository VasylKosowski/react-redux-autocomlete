/**
 * Created by SG0226637 on 2/9/2017.
 */
import {createStore} from 'redux';
import counterReducer from './reducers/counter';
import gitUsersReducer from './reducers/gitUsers';
import queryReducer from './reducers/query';

function reducer(state, action) {
 return {
     query : queryReducer(state.query, action),
     counter: counterReducer(state.counter, action),
     gitUsers : gitUsersReducer(state.gitUsers, action),
 }
}

const store = createStore(reducer, {
    gitUsers : [],
    query : '',
    counter : 0
});

export default store;