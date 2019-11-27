import React from 'react';

import './_User.scss'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { connect } from 'react-redux'
import { getUsers, updateUser } from 'redux/reducers/user'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        document.title = "User"
        this.props.getUsers()
    }

    componentWillReceiveProps(nextProps) {
        const data = nextProps.users
        data && data.map(item => {
            this.setState(state => ({
                ...state,
                [item._id]: item.status === 1 ? true : false
            }))
        })
    }

    onStatusChange = (value) => {
        const userId = value
        const currrentStatus = this.state[userId]
        this.setState({
            [userId]: !currrentStatus
        }, () => {
            //call api update
            this.props.updateUser({
                id: userId,
                status: currrentStatus === true ? 0 : 1
            })
        })
    }

    render() {
        const data = this.props.users
        const columns = [
            {
                Header: 'Status',
                accessor: 'status',
                Cell: prop => {
                    if (prop.original.role.name === 'admin') {
                        return (
                            <span></span>
                        )
                    }
                    else {
                        return (
                            <div className="status">
                                <input type="checkbox" name="status" onChange={() => {this.onStatusChange(prop.original._id)}} value={prop.original._id} checked={this.state[prop.original._id]}></input>
                                <span className="checkmark" onClick={() => { this.onStatusChange(prop.original._id) }}></span>
                            </div>
                        )
                    }
                }
            },
            {
                Header: 'User Name',
                accessor: 'username',
                Cell: prop => {
                    if (prop.original.role.name === 'admin') {
                        return prop.value
                    }
                    else {
                        return (
                            <a href={"/user/" + prop.original._id}>{prop.value}</a>
                        )
                    }
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
                id: "Role",
                Header: 'Role',
                accessor: d => d.role.name,

            },
            {
                Header: 'Day Register',
                accessor: 'createdDate',
                Cell: prop => {
                    return <span>{prop.original.createdDate.slice(0, 10)}</span>
                }

            },
            {
                Header: 'Action',
                Cell: prop => {
                    if (prop.original.role.name === 'admin') {
                        return <span></span>
                    }
                    else {
                        return (
                            <div className="action">
                                <a href={"/user/" + prop.original._id}>&#10000;</a>
                                <a href={"/user/" + prop.original._id}>&#10005;</a>
                            </div>
                        )
                    }
                }
            },
        ];
        return (
            <MasterLayout>
                <div className="container">
                    <div className="user">
                        <h1>User</h1>
                        <a href="/add-user">&#10010;</a>
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
    users: state.user.users
})

const mapDispatchToProps = {
    getUsers,
    updateUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
