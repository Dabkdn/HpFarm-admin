import React from 'react'
import { CurrencyUnitForm } from './sub-view'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'

class AddCurrencyUnit extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MasterLayout>
                <div className="container" style={{height: "100vh"}}>
                    <CurrencyUnitForm type="add"/>
                </div>
            </MasterLayout>
        )
    }
}

export default withRouter(AddCurrencyUnit)