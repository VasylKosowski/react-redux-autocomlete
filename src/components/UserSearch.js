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
        switch(e.key) {
            case "ArrowDown":
                document.getElementById('user-list').childNodes[0].focus();
                break;
            case "ArrowUp":
                console.log('Arrow Up was pressed');
                break;
        }
    }
    // render
    render() {
        const {query} = this.props;
        return (
            <input type="text" value={query} onChange={this.props.onChange} onKeyUp={this.handleUp} />
        );
    }
}