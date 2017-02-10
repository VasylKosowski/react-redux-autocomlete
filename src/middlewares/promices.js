/**
 * Created by SG0226637 on 2/9/2017.
 */
import {PROMISE} from './../const/index'

const middleware = store => next => action => {
    if (action.type != PROMISE) {
        return next(action);
    }
        const [successAction, failureAction] = action.actionsList;

        action.promise.then((data) => store.dispatch({
            type : successAction,
            data
        }), (error) => store.dispatch({
            type: failureAction,
            error
        }));
    };

export default middleware;
