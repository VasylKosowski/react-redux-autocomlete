/**
 * Created by SG0226637 on 2/9/2017.
 */
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';
import { PageHeader } from "react-bootstrap";
import {getGitHubUsersAction} from '../actions/gitActions';
// import './../stylesheets/main.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {query: '', gitUsers : []};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({query: event.target.value});
        this.props.getGitHubUsersAction(this.state.query);
    }

    render() {
        // this part will be updated
        let imageWidth = '100px;';
        let imageHeight = '100px';
        return (
            <div className="page-user-search">
                <PageHeader>{'Git User Search'}</PageHeader>
                <input type="text" value={this.state.query} onChange={this.handleChange} />
                <div>
                    <ul>
                        {this.props.gitUsers.map((user) =>
                            <li>
                                <div>
                                 <img src={user.avatar_url} style={{width: imageWidth, height:imageHeight }}/>
                                    <a href={user.url}> {user.login}</a>
                                </div>
                            </li>)}
                    </ul>
                </div>
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