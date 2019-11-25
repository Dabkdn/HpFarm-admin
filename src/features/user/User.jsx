import React from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { connect } from 'react-redux'
import { getUsers } from 'redux/reducers/user'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        document.title = "User"
        this.props.getUsers()
    }

    render() {
        const data = this.props.users
        console.log(data)
        const columns = [
            {
                Header: 'User Name',
                accessor: 'username',
                Cell: prop => {
                    return (
                        <a href={"/user/" + prop.original._id}>{prop.value}</a>
                    )
                }
            },
            {
                Header: 'Phone',
                accessor: 'phone',

            },
            {
                Header: 'Email',
                accessor: 'email',

            },
            {
                id: "role",
                Header: 'Role',
                accessor: d => d.role.name,

            },
            {
                Header: 'Action',
                Cell: prop => {
                    console.log(prop)
                    return (
                        <div>
                            <a href={"/user/" + prop.original._id}>&#10000;</a>
                            <a href={"/user/" + prop.original._id}>&#10005;</a>
                        </div>
                    )
                }
            },
        ];
        return (
            <MasterLayout>
                <div className="container">
                    <div className="user">
                        <ReactTable
                            data={data}
                            columns={columns}
                            defaultPageSize={5}
                        />
                    </div>
                </div>
            </MasterLayout>
        );
    }
}
const mapStateToProps = (state) => ({
    users: state.user.users
})

const mapDispatchToProps = {
    getUsers
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
