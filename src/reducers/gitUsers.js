/**
 * Created by SG0226637 on 2/9/2017.
 */
export default function gitUsers(state = [], action){
    switch (action.type) {
         case 'USERS_LOADED' :
             return {...state, ...{gitUsers : action.data}};
        default :
            return state
    }
}
