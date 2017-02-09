/**
 * Created by SG0226637 on 2/9/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './state';
import {getGitHubUsers} from './api/gitHubUsersApi'
import {INCREASE_COUNTER} from './const';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root') );

store.subscribe(() => console.log('Some1', store.getState()));

store.dispatch({
    type : 'PROMISE',
    actions: ['USERS_LOADING', 'USERS_LOADED', 'USERS_LOADED_FAILURE'],
    promise : getGitHubUsers('vasyl')
});

store.dispatch({
   type : INCREASE_COUNTER,
});

store.dispatch({
    type : INCREASE_COUNTER,
});
store.dispatch({
    type : INCREASE_COUNTER,
});
