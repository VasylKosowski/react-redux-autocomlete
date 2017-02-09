/**
 * Created by SG0226637 on 2/9/2017.
 */
import {INCREASE_COUNTER, RESET_COUNTER} from './../const';

export default function counter(state = 0,  action){
    switch (action.type) {
        case INCREASE_COUNTER:
            return state + 1;
        case RESET_COUNTER:
            return {...state, ...{ counter: 0}};
        default :
            return state
    }
}