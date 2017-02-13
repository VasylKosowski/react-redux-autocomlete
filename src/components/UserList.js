/**
 * Created by SG0226637 on 2/10/2017.
 */
import React, { PropTypes } from "react";
import UserListElement from './UserListElement';

// User List Element component
export default class UserList extends React.Component {

    // render
    render() {
        const {gitUsers} = this.props;
        return (
            <ul id="user-list">
                {gitUsers.map((user, i) =>
                    <UserListElement key={i} index={i} user={user}/>
                )}
            </ul>
        );
    }
}

// prop checks
UserList.propTypes = {
    gitUsers: PropTypes.array.isRequired,
};
