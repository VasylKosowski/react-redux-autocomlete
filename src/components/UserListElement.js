/**
 * Created by SG0226637 on 2/10/2017.
 */
import React, { PropTypes } from "react";

// User List Element component
export default class UserListElement extends React.Component {
    // render
    render() {
        const {user} = this.props;
        return (
            <li key={user.id}>
                <a href={user.html_url}>
                    <img src={user.avatar_url} />
                    <h3>{user.login}</h3>
                </a>
            </li>
        );
    }
}

// prop checks
UserListElement.propTypes = {
    user: PropTypes.object.isRequired,
};