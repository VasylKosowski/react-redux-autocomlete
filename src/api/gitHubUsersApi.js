/**
 * Created by SG0226637 on 2/9/2017.
 */
import {API_URL, ACCESS_TOKEN} from './../const'
import fetch from 'isomorphic-fetch';

export function getGitHubUsers(query){
   return fetch(`${API_URL}?access_token=${ACCESS_TOKEN}&q=${query}`).then((r) =>
       r.json());
}