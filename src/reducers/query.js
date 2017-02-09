/**
 * Created by SG0226637 on 2/9/2017.
 */
export default function (state, action){
    switch (action.type) {
        case 'QUERY_CHANGED':
            return {...state, ...{query: state.query}};
        default :
            return state;
    }
};
