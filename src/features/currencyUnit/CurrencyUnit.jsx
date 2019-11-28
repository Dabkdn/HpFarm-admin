import React from 'react';

import './_CurrencyUnit.scss'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { connect } from 'react-redux'
import { getCurrencyUnits } from 'redux/reducers/currencyUnit'
import { pageTitle } from 'constants/index'

class CurrencyUnit extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = pageTitle.currencyUnit
        this.props.getCurrencyUnits()
    }

    render() {
        const data = this.props.currencyUnits
        const columns = [
            {
                Header: 'Unit',
                accessor: 'unit',
                Cell: prop => {
                    return (
                        <a href={"/currency/" + prop.original._id}>{prop.value}</a>
                    )
                }
            },
            {
                Header: 'Action',
                Cell: prop => <div className="action">
                    <a href={"/currency/" + prop.original._id}>&#10000;</a>
                    <a href={"/currency/" + prop.original._id}>&#10005;</a>
                </div>
            },
        ];
        return (
            <MasterLayout>
                <div className="container">
                    <div className="currency-unit">
                        <h1>Currency Unit</h1>
                        <a href="/add-currency">&#10010;</a>
                        <ReactTable
                            data={data}
                            columns={columns}
                            defaultPageSize={10}
                        />
                    </div>
                </div>
            </MasterLayout>
        );
    }
}
const mapStateToProps = (state) => ({
    currencyUnits: state.currencyUnit.currencyUnits
})

const mapDispatchToProps = {
    getCurrencyUnits
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrencyUnit));
