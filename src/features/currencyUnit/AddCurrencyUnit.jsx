import React from 'react'
import { CurrencyUnitForm } from './sub-view'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { pageTitle } from 'constants/index'

class AddCurrencyUnit extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.title = pageTitle.addCurrencyUnit
    }

    render() {
        return (
            <MasterLayout>
                <div className="container" style={{ height: "100vh" }}>
                    <CurrencyUnitForm type="add" />
                </div>
            </MasterLayout>
        )
    }
}

export default withRouter(AddCurrencyUnit)