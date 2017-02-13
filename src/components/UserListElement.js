/**
 * Created by SG0226637 on 2/10/2017.
 */
import React, { PropTypes } from "react";

// User List Element component
export default class UserListElement extends React.Component {

    constructor(props) {
        super(props);
        this.handleUp = this.handleUp.bind(this);
    }

    handleUp(e) {
        // this can be improved, but for test task is okay)
        switch(e.key) {
            case "ArrowDown":
                let nextElem = document.getElementById('user-list').childNodes[this.props.index + 1];
                if (nextElem != undefined)
                    nextElem.focus();
                break;
            case "ArrowUp":
                if (this.props.index == 0)
                {
                    document.getElementById('user-search-field').focus();
                    return;
                }
                let prevElem = document.getElementById('user-list').childNodes[this.props.index - 1];
                if (prevElem != undefined)
                    prevElem.focus();
                break;
            case "Enter":
                let currElem = document.getElementById(this.props.index.toString());
                if (currElem != undefined)
                    currElem.click();
                break;
        }
    }

    // render
    render() {
        const {user, key, index} = this.props;
        return (
            <li tabIndex='-1' key={key}  onKeyUp={this.handleUp}>
                <a id={index} href={user.html_url} >
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
    key: PropTypes.number,
    index: PropTypes.number,
};