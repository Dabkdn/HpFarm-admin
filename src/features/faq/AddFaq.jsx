import React from 'react'
import { FaqForm } from './sub-view'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { pageTitle } from 'constants/index'

class AddFaq extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.title = pageTitle.addFaq
    }

    render() {
        return (
            <MasterLayout>
                <div className="container" >
                    <FaqForm type="add" />
                </div>
            </MasterLayout>
        )
    }
}

export default withRouter(AddFaq)