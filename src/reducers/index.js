/**
 * Created by SG0226637 on 2/9/2017.
 */
import {combineReducers} from 'redux';
import counter from './counter';
import gitUsers from './gitUsers';
import query from './query';

export default combineReducers({
    counter,
    gitUsers,
    query,
})