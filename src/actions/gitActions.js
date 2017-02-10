/**
 * Created by SG0226637 on 2/9/2017.
 */

import {getGitHubUsers} from './../api/gitHubUsersApi';
import {USERS_LOADED, USERS_LOADED_FAILURE, PROMISE} from './../const/index'

export function getGitHubUsersAction (data) {
    return ({
        type: PROMISE,
        actionsList: [USERS_LOADED, USERS_LOADED_FAILURE],
        promise: getGitHubUsers(data),
    });
}