/**
 * Created by SG0226637 on 2/9/2017.
 */
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';
import {getGitHubUsersAction} from './actions/gitActions';

class App extends Component {
    handleClick(){
        this.props.getGitHubUsersAction();
    }

    render() {
        return (
            <div>
            <h1> AutoComplete From GitHub
            </h1>
            <button onClick={::this.handleClick}> Load Users </button>
            <ul>
                {::this.props.gitUsers.map((user) => <li>user.url</li>)}
            </ul>
            </div>
        );
    }
}

export default connect(
    (state) => {return {query : state.query, gitUsers : state.gitUsers};},
    (dispatch) => bindActionCreators({getGitHubUsersAction}, dispatch)
)(App)