import React from 'react';

import './_Faq.scss'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { connect } from 'react-redux'
import { getFaqs } from 'redux/reducers/faq'
import { pageTitle } from 'constants/index'

class Faq extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = pageTitle.faq
        this.props.getFaqs()
    }

    render() {
        const data = this.props.faqs
        const columns = [
            {
                Header: 'Question',
                accessor: 'question'
            },
            {
                Header: 'Answer',
                accessor: 'answer'
            },
            {
                Header: 'Action',
                Cell: prop => <div className="action">
                    <a href={"/faq/" + prop.original._id}>&#10000;</a>
                    <a href={"/faq/" + prop.original._id}>&#10005;</a>
                </div>
            },
        ];
        return (
            <MasterLayout>
                <div className="container">
                    <div className="faq">
                        <h1>Frequently Asked Questions</h1>
                        <a href="/add-faq">&#10010;</a>
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
    faqs: state.faq.faqs
})

const mapDispatchToProps = {
    getFaqs
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Faq));
