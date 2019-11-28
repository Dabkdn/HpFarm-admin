import React from 'react'
import { UserForm } from './sub-view'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { pageTitle } from 'constants/index'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.title = pageTitle.addUser
    }

    render() {
        return (
            <MasterLayout>
                <div className="container">
                    <UserForm type="add" />
                </div>
            </MasterLayout>
        )
    }
}

export default withRouter(AddUser)