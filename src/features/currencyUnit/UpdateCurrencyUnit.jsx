import React from 'react'
import { connect } from 'react-redux'
import { CurrencyUnitForm } from './sub-view'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { getCurrencyUnit } from 'redux/reducers/currencyUnit'

class UpdateCurrencyUnit extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const currencyUnitId = this.props.match.params.id
        this.props.getCurrencyUnit(currencyUnitId)
    }

    render() {
        return (
            <MasterLayout>
                <div className="container" style={{ height: "100vh" }}>
                    <CurrencyUnitForm type="update" data={this.props.currencyUnit} />
                </div>
            </MasterLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currencyUnit: state.currencyUnit.currencyUnit
    }
}

const mapDispatchToProps = {
    getCurrencyUnit
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateCurrencyUnit))