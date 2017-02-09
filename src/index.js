/**
 * Created by SG0226637 on 2/9/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state';

ReactDOM.render(<App />, document.getElementById('root'));

store.subscribe(() => console.log('Some new State', store.getState()));

/* some tests */
store.dispatch({
    type : 'INCREASE_COUNTER',
});

store.dispatch({
    type : 'USERS_LOADED',
    payload : [{id : 1, name : 'some_name_1'},
        {id : 2, name : 'some_name_2'},]
});