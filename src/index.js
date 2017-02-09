/**
 * Created by SG0226637 on 2/9/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state';
import {API_URL, ACCESS_TOKEN, QUERY_CHANGED} from './const'
import fetch from 'isomorphic-fetch';

ReactDOM.render(<App />, document.getElementById('root'));

store.subscribe(() => console.log('Some1', store.getState().query.query));

/* some tests */
store.dispatch({
    type : QUERY_CHANGED,
    query : 'Vasyl',
});

fetch(`${API_URL}?access_token=${ACCESS_TOKEN}&q=${store.getState().query.query}`).then((r) => r.json())
    .then(::console.log);