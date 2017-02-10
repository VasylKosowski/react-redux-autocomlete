/**
 * Created by SG0226637 on 2/10/2017.
 */
import React  from 'react';
import {connect } from 'react-redux';

export class UsersList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let users = [];
        return (
            <div>
                <ul>
                    {users.map((user) => <li>{user.name} {user.url}</li>)}
                </ul>
            </div>
        );
    }
}



// export the connected class
function mapStateToProps(state) {
    console.log(state.gitUsers);
    return {
        gitUsers: state.gitUsers || [],
    };
}
export default connect(mapStateToProps)(UsersList);