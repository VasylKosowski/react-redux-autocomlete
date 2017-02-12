/**
 * Created by SG0226637 on 2/9/2017.
 */
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';
import { PageHeader } from "react-bootstrap";
import {getGitHubUsersAction} from '../actions/gitActions';
import './../stylesheets/main.scss';
import UserList from './UserList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {query: '', gitUsers : []};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let inputQuery = event.target.value;
        this.setState({query: inputQuery});
        this.props.getGitHubUsersAction(inputQuery);
    }

    render() {
        return (
            <div className="page-user-search">
                <PageHeader> {'Search gitHub Users'} </PageHeader>
                <input type="text" value={this.state.query} onChange={this.handleChange} />
                <UserList gitUsers={this.props.gitUsers} />
            </div>
        );
    }
}

export default connect(
    (state) => {return {
        query : state.query,
        gitUsers : state.gitUsers};},
    (dispatch) => bindActionCreators({getGitHubUsersAction}, dispatch)
)(App)