/**
 * Created by SG0226637 on 2/9/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './state';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root') );

