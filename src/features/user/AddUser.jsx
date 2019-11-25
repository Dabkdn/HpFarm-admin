import React from 'react'
import { UserForm } from './sub-view'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MasterLayout>
                <div className="container">
                    <UserForm type="add"/>
                </div>
            </MasterLayout>
        )
    }
}

export default withRouter(AddUser)