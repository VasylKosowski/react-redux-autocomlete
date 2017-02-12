/**
 * Created by SG0226637 on 2/10/2017.
 */
import React, { PropTypes } from "react";

// User List Element component
export default class UserListElement extends React.Component {

    // render
    render() {
        const {user, key} = this.props;
        return (
            <li tabIndex='-1' key={key}>
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
    key : PropTypes.number,
};