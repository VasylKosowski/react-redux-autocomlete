/**
 * Created by SG0226637 on 2/9/2017.
 */
import {combineReducers} from 'redux';
import gitUsers from './gitUsers';
import query from './query';

export default combineReducers({
    gitUsers,
    query,
})