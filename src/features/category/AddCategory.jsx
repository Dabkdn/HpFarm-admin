import React from 'react'
import { CategoryForm } from './sub-view'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MasterLayout>
                <div className="container" style={{height: "100vh"}}>
                    <CategoryForm type="add"/>
                </div>
            </MasterLayout>
        )
    }
}

export default withRouter(AddUser)