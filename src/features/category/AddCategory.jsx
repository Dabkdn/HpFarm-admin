import React from 'react'
import { CategoryForm } from './sub-view'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { pageTitle } from 'constants/index'

class AddCategory extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.title = pageTitle.addCategory
    }
    
    render() {
        return (
            <MasterLayout>
                <div className="container" >
                    <CategoryForm type="add" />
                </div>
            </MasterLayout>
        )
    }
}

export default withRouter(AddCategory)