/**
 * Created by SG0226637 on 2/9/2017.
 */
import {connect} from 'react-redux';
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <h1> AutoComplete From GitHub {this.props.query} </h1>
        );
    }
}

export default connect(
    (state) => {return {query : state.query};}
)(App)