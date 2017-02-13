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
        this.state = {query: '', gitUsers : [], failureMessage : ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let inputQuery = event.target.value;
        this.setState({query: inputQuery});
        this.props.getGitHubUsersAction(inputQuery);
        this.setState({failureMessage: inputQuery > '' && this.props.gitUsers.length <= 0 ?
            'Something Happened, please check log in browser.' : ''});
    }

    render() {
        return (
            <div className="page-user-search">
                <PageHeader> {'Search gitHub Users'} </PageHeader>
                <input type="text" value={this.state.query} onChange={this.handleChange} />
                <UserList gitUsers={this.props.gitUsers} />
                <p>{this.state.failureMessage}</p>
            </div>
        );
    }
}

export default connect(
    (state) => {return {
        gitUsers : state.gitUsers,
        failureMessage : state.failureMessage};},
    (dispatch) => bindActionCreators({getGitHubUsersAction}, dispatch)
)(App)