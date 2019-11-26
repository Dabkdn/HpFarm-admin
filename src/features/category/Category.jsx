import React from 'react';

import './_Category.scss'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { connect } from 'react-redux'
import { getCategories } from 'redux/reducers/category'

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Category"
        this.props.getCategories()
    }

    render() {
        const data = this.props.categories
        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
                Cell: prop => {
                    return (
                        <a href={"/category/" + prop.original._id}>{prop.value}</a>
                    )
                }
            },
            {
                Header: 'Description',
                accessor: 'description',

            },
            {
                Header: 'Created Date',
                accessor: 'createdDate',
                Cell: prop => {
                    return <span>{prop.original.createdDate && prop.original.createdDate.slice(0, 10)}</span>
                }

            },
            {
                Header: 'Action',
                Cell: prop => <div className="action">
                    <a href={"/category/" + prop.original._id}>&#10000;</a>
                    <a href={"/category/" + prop.original._id}>&#10005;</a>
                </div>
            },
        ];
        return (
            <MasterLayout>
                <div className="container">
                    <div className="category">
                        <h1>Category</h1>
                        <a href="/add-category">&#10010;</a>
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
    categories: state.category.categories
})

const mapDispatchToProps = {
    getCategories
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
