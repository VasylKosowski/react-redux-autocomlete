/**
 * Created by SG0226637 on 2/9/2017.
 */
const middleware = store => next => action => {
    if (!action.then){
        return next(action);
    }
    const [startAction, successAction, failureAction] = action.actions;
    store.dispatch({
        type: startAction
    });

    action.promise.then((data) => store.dispatch({
        type: successAction,
        data : data,
        }), (error) => store.dispatch({
        type : failureAction,
        error : error
        }));

};

export default middleware;
