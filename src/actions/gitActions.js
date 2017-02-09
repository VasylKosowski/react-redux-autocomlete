/**
 * Created by SG0226637 on 2/9/2017.
 */

import {getGitHubUsers} from './../api/gitHubUsersApi';

export function getGitHubUsersAction () {
    return {
        type: 'PROMISE',
        actions: ['USERS_LOADING', 'USERS_LOADED', 'USERS_LOADED_FAILURE'],
        promise: getGitHubUsers('vasyl'),
    };
}