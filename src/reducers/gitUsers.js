/**
 * Created by SG0226637 on 2/9/2017.
 */
import {USERS_LOADED, USERS_LOADED_FAILURE} from './../const/index'

export default function gitUsers(state = [], action){
    switch (action.type) {
        case USERS_LOADED :
            return action.data.items;
        case USERS_LOADED_FAILURE :
            return [];
        default :
            return state;
    }
}
