import React from 'react'
import './_Logout.scss'

import { toastr } from 'react-redux-toastr';
import {Link} from 'react-router-dom'

export default class Logout extends React.Component {
    constructor(props) {
        super(props)
    }
    handleLogout = () => {
        localStorage.removeItem('authenticationInfo')
        toastr.success('Success!', 'Please wait a moment.')
    }
    render() {
        return (
            <div className="logout">
                <Link to="/login" onClick={this.handleLogout}>Log out</Link>
            </div>
        )
    }
}