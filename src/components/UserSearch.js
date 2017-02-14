/**
 * Created by SG0226637 on 2/13/2017.
 */
import React from "react";

// User List Element component
export default class UserSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {query: ''};
        this.handleUp = this.handleUp.bind(this);
    }

    handleUp(e) {
        let firstElem;
        let list = document.getElementById('user-list');
            if (list != undefined)
        firstElem = document.getElementById('user-list').childNodes[0];

        // suggestion
        // I would like to focus on first elem in a list only by pressing arrow down
        switch(e.key) {
            case "ArrowDown":
                if (firstElem != undefined)
                    firstElem.focus();
                break;
        }
    }
    // render
    render() {
        const {query} = this.props;
        return (
            <input id="user-search-field" type="text" value={query} onChange={this.props.onChange} onKeyUp={this.handleUp} />
        );
    }
}