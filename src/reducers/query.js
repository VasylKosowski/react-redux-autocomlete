/**
 * Created by SG0226637 on 2/9/2017.
 */
export default function query(state = '', action){
    switch (action.type) {
        case 'QUERY_CHANGED':
            return {...state, ...{query: action.query}};
        default :
            return state
    }
}